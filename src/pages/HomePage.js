import React from "react";
import { useUser } from "../components/UserProvider";
import TextLoop from "react-text-loop";
import { useTranslation } from "react-i18next";
import { ButtonToolbar, Col, FlexboxGrid, IconButton, Row } from "rsuite";
import logo from "../logo.svg";
import AddOutlineIcon from '@rsuite/icons/AddOutline';
import WechatIcon from '@rsuite/icons/Wechat';
import { Animation } from 'rsuite';
import { useHistory } from "react-router";

function HomePage() {
  const { userData, isLoggedIn } = useUser();
  const { t } = useTranslation();
  const history = useHistory();

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

              <Col xsHideen smHidden mdHidden lg={12}>
                <FlexboxGrid justify="center">
                <img src={logo} alt="Logo" width="400" height="400" />
                </FlexboxGrid>
              </Col>
            </Row>
          </Animation.Slide>

        </FlexboxGrid.Item>
    </FlexboxGrid>
  )
}

export default HomePage;