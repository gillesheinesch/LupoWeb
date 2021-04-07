const express = require('express');
const router = express.Router();

const indexRouter = require('./index');

router.use('/', indexRouter);

module.exports = router;
