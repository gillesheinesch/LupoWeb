import React, { useEffect, useState } from "react";
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

function HomePage() {
  const { t } = useTranslation();
  const history = useHistory();
  const [users, setUsers] = useState(0);
  const [servers, setServers] = useState(0);
  const [commands, setCommands] = useState(0);
  const [plugins, setPlugins] = useState(0);

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
    });
  }, []);

  return (
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
              </Col>

              <Col xsHidden smHidden mdHidden lg={12}>
                <FlexboxGrid justify="center">
                <img src={logo} alt="Logo" width="400" height="400" />
                </FlexboxGrid>
              </Col>
            </Row>
          </Animation.Slide>

          <Row style={{marginTop: '6em'}}>
            <Col md={6} sm={12}>
              <Panel bordered header={<> <PeoplesIcon /> { t('homepage_stats-users') } </>}>
                <h3><CountUp start={0} end={users} duration={2.75} /></h3>
              </Panel>
            </Col>
            <Col md={6} sm={12}>
              <Panel bordered header={<> <StorageIcon /> { t('homepage_stats-servers') } </>}>
               <h3><CountUp start={0} end={servers} duration={2.75} /></h3>
              </Panel>
            </Col>
            <Col md={6} sm={12}>
              <Panel bordered header={<> <CodeIcon /> { t('homepage_stats-commands') } </>}>
                <h3><CountUp start={0} end={commands} duration={2.75} /></h3>
              </Panel>
            </Col>
            <Col md={6} sm={12}>
              <Panel bordered header={<> <MiniProgramIcon /> { t('homepage_stats-plugins') } </>}>
               <h3><CountUp start={0} end={plugins} duration={2.75} /></h3>
              </Panel>
            </Col>
          </Row>
        </FlexboxGrid.Item>
    </FlexboxGrid>
  )
}

export default HomePage;