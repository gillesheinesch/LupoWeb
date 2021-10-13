import React, { useState } from "react";
import { Avatar, Button, Dropdown, Message, Nav, Navbar, toaster } from "rsuite";
import { useUser } from "./UserProvider";
import { useHistory } from "react-router-dom";
import { config } from "../App.js";
import { useTranslation } from "react-i18next";
import { resources } from "../i18n.js";
import i18next from "i18next";
import Flag from "react-flagkit";
import CookieConsent from "react-cookie-consent";
import { toggleTheme } from "..";
import { sendRequest } from "../Util";
import logo from "../logo.svg";

function TopNavbar() {
  const { t } = useTranslation();
  const { isLoggedIn, userData, avatar } = useUser();
  const history = useHistory();
  const [isBotDown, setBotDown] = useState(false);

  sendRequest('/bot').catch(function (error) {
    setBotDown(true);
  });

  const renderLanguage = (lng) => {
    let regionNames = new Intl.DisplayNames([lng.split("_")[0]], {type: 'region'});
    return (
      <Dropdown.Item icon={ <Flag country={ lng.split("_")[1] } /> } onSelect={ () => i18next.changeLanguage(lng) }> { regionNames.of(lng.split("_")[1]) }</Dropdown.Item>
    )
  }

  return (
    <div>
      { isBotDown &&
        <Message closable  showIcon type="error">
          { t('topnavbar_error-bot-down') }
        </Message>
      }

      <Navbar className="navbar">
        <Navbar.Brand onClick={ () => history.push('/') }>
          <img src={logo} alt="Logo" width="30" height="30" />
        </Navbar.Brand> 
        <Nav>
          <Nav.Item onSelect={ () => history.push('/') }> { t('topnavbar_home') } </Nav.Item>
          <Nav.Item onSelect={ () => history.push('/pluginstore') }> { t('topnavbar_plugin-store') }</Nav.Item>
          <Nav.Item onSelect={ () => history.push('/status') }>{ t('topnavbar_status') }</Nav.Item>
        </Nav>
        
        <Nav pullRight>
          { isLoggedIn
            ? <Nav>
                <Dropdown trigger={ ['click', 'hover'] } icon={ <Avatar circle src={ avatar } alt="Avatar" size="xs" /> }>
                  <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
                    <p>{ t('topnavbar_signed-in-name') }</p>
                    <strong>{ userData.asTag }</strong>
                  </Dropdown.Item>
                  <Dropdown.Item divider />
                  <Dropdown.Menu title={ " " + t('topnavbar_language') }>
                     { Object.keys(resources).map(renderLanguage) }
                  </Dropdown.Menu>
                  <Dropdown.Item onSelect={ () => toggleTheme() }>{ t('topnavbar_theme') }</Dropdown.Item>
                  <Dropdown.Item divider />
                  <Dropdown.Item onSelect={ () => history.push('/dashboard') }>{ t('topnavbar_dashboard') }</Dropdown.Item>
                  <Dropdown.Item onSelect={ () => history.push('/logout') }>{ t('topnavbar_sign-out') }</Dropdown.Item>
                </Dropdown>
              </Nav>
            : <Nav>
                <Button appearance="primary" href={ "https://discord.com/api/oauth2/authorize?client_id=" + config.clientId + "&redirect_uri=" + config.redirectUri + "&response_type=code&scope=identify%20guilds" }>
                  <i className="fab fa-discord"></i> { t('topnavbar_sign-in') }  
                </Button> 
              </Nav>
          }
        </Nav>
      </Navbar>

      <CookieConsent overlay onAccept={ () => { toaster.push( <Message showIcon type="success" closeable>{ t('cookieconsent_accept-alert') }</Message>) }} buttonText={ t('cookieconsent_accept-button') }>{ t('cookieconsent_info-text') }</CookieConsent>
    </div>
  )
}

export default TopNavbar;