const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const handlebars = require('express-handlebars');
const handlebarsHelpers = require('handlebars-helpers')();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const i18n = require('i18n');
const compression = require('compression');
const helmet = require('helmet');
require('dotenv').config();

const lang_english = require('./locales/en-US');

const app = express();

app.engine('handlebars', handlebars({
  defaultLayout: 'mainLayout',
  layoutsDir: `${__dirname}/views/layouts/`,
  helpers: handlebarsHelpers,
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// i18n configuration
i18n.configure({
  locales: ['en-US', 'de-DE', 'fr-FR', 'lb-LU'],
  directory: `${__dirname}/locales`,
  defaultLocale: 'en-US',
  cookie: 'ulang',
});

app.set('trust proxy', 1);
// app.use(session({
//   secret: 'fk session fk',
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     secure: true,
//   },
//   store: new MongoStore({
//     mongooseConnection: mongoose.connection,
//     dbName: process.env.DB_DATABASE,
//   }),
// }));

app.use(helmet());
app.use(logger('dev'));
app.use(fileUpload());
app.use(compression());

app.use(bodyParser.json({
  limit: '50mb',
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(i18n.init);

// get browser language and attach it to all routes
app.use(async (req, res, next) => {
  if (req.getLocale()) {
    res.locals.lang = require(`./locales/${req.getLocale()}`);
    res.locals.longLangCode = req.getLocale();
    res.locals.langCode = req.getLocale().slice(0, 2);
  }

  res.locals.query = req.query;
  next();
});

/* GET en page. */
app.all('/en/?*', async (req, res, next) => {
  await res.cookie('ulang', 'en-US', {
    httpOnly: true,
    expires: new Date(Date.now() + 3.154e+10),
  });

  res.locals.lang = lang_english;
  res.locals.longLangCode = 'en-US';
  res.locals.langCode = 'en';
  next();
});


app.use('/en', localesRouter);
app.use('/', localesRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {
    status: err.status || 500,
  };

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
