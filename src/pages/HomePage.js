import React, { Fragment, useEffect, useState } from "react";
import TextLoop from "react-text-loop";
import CountUp from 'react-countup';
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { sendRequest } from "../Util";
import { Animation, ButtonToolbar, Col, FlexboxGrid, IconButton, Row, Panel } from "rsuite";
import logo from "../logo.svg";
import AddOutlineIcon from '@rsuite/icons/AddOutline';
import WechatIcon from '@rsuite/icons/Wechat';
import PeoplesIcon from '@rsuite/icons/Peoples';
import CodeIcon from '@rsuite/icons/Code';
import StorageIcon from '@rsuite/icons/Storage';
import MiniProgramIcon from '@rsuite/icons/MiniProgram';
import CheckIcon from '@rsuite/icons/Check';
import TopNavbar from "../components/TopNavbar";

function HomePage() {
  const { t } = useTranslation();
  const history = useHistory();
  const [users, setUsers] = useState(0);
  const [servers, setServers] = useState(0);
  const [commands, setCommands] = useState(0);
  const [plugins, setPlugins] = useState(0);
  const [pluginNames, setPluginNames] = useState("");

  useEffect(() => {
    sendRequest('/users/total').then(res => {
      setUsers(res.data.totalUsers);
    });
    sendRequest('/servers/total').then(res => {
      setServers(res.data.totalServers);
    });
    sendRequest('/commands').then(res => {
      setCommands(Object.keys(res.data).length);
    });
    sendRequest('/plugins').then(res => {
      setPlugins(Object.keys(res.data).length);
      Object.keys(res.data).forEach(key => {
        setPluginNames(prevPluginNames => prevPluginNames + res.data[key].translatedNames.en_US + ", ");
      });
    });
  }, []);

  return (
    <Fragment>
      <TopNavbar />
      <FlexboxGrid justify="center" style={{marginTop: '15em'}}>
          <FlexboxGrid.Item colspan={15}>

            <Animation.Slide in placement="left">
              <Row className="show-grid">
                <Col xs={24} sm={24} md={12} lg={12}>
                  <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                    <h1>{ t('homepage_text-loop-build-server') }</h1>
                    <h1>{ t('homepage_text-loop-install-plugins') }</h1>
                    <h1>{ t('homepage_text-loop-plugin-range') }</h1>
                    <h1>{ t('homepage_text-loop-realize-suggestions') }</h1>
                  </TextLoop>
                  <p style={{fontSize: '22px', marginTop: '1em'}}>{ t('homepage_slogan') }</p>

                  <ButtonToolbar style={{marginTop: '2em'}}>
                    <IconButton onClick={() => history.push('/invite')} size="lg" block color="green" icon={<AddOutlineIcon />} appearance="primary">
                      <b style={{textTransform: "uppercase"}}>{ t('homepage_buttonbar-invite') }</b>
                    </IconButton>
                    <IconButton onClick={() => history.push('/support')} size="lg" block color="yellow" icon={<WechatIcon />} appearance="primary">
                      { t('homepage_buttonbar-support') }
                    </IconButton>
                  </ButtonToolbar>
                  <p style={{fontSize: '15px', marginTop: '2em',}}>
                    <CheckIcon style={{color: '#4CAF50', marginRight: '1em'}}/>
                    { t('homepage_check-plugins', { plugins: pluginNames.substring(0, pluginNames.length-2) }) }
                  </p>
                  <p style={{fontSize: '15px', marginTop: '0.5em',}}>
                    <CheckIcon style={{color: '#4CAF50', marginRight: '1em'}}/>
                    { t('homepage_check-community') }
                  </p>
                </Col>

                <Col xsHidden smHidden mdHidden lg={12}>
                  <FlexboxGrid justify="center">
                  <img src={logo} alt="Logo" width="400" height="400" />
                  </FlexboxGrid>
                </Col>
              </Row>
            </Animation.Slide>

            <Row style={{marginTop: '6em', marginBottom: '5em'}}>
              <Col lg={6} sm={24} xs={24}>
                <Panel shaded bordered header={<> <PeoplesIcon /> { t('homepage_stats-users') } </>}>
                  <h3><CountUp start={0} end={users} duration={2.75} /></h3>
                </Panel>
              </Col>
              <Col lg={6} sm={24} xs={24}>
                <Panel shaded bordered header={<> <StorageIcon /> { t('homepage_stats-servers') } </>}>
                <h3><CountUp start={0} end={servers} duration={2.75} /></h3>
                </Panel>
              </Col>
              <Col lg={6} sm={24} xs={24}>
                <Panel shaded bordered header={<> <CodeIcon /> { t('homepage_stats-commands') } </>}>
                  <h3><CountUp start={0} end={commands} duration={2.75} /></h3>
                </Panel>
              </Col>
              <Col lg={6} sm={24} xs={24}>
                <Panel shaded bordered header={<> <MiniProgramIcon /> { t('homepage_stats-plugins') } </>}>
                <h3><CountUp start={0} end={plugins} duration={2.75} /></h3>
                </Panel>
              </Col>
            </Row>
          </FlexboxGrid.Item>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FF6431" fill-opacity="1" d="M0,128L80,149.3C160,171,320,213,480,224C640,235,800,213,960,192C1120,171,1280,149,1360,138.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      </FlexboxGrid>
    </Fragment>
  )
}

export default HomePage;