import React from "react";
import { Avatar, Button, Dropdown, IconButton, Message, Nav, toaster, Tooltip, Whisper } from "rsuite";
import { useUser } from "./UserProvider";
import { useHistory } from "react-router-dom";
import { config } from "../App.js";
import { useTranslation } from "react-i18next";
import "./TopNavbar.css";
import { resources } from "../i18n.js";
import i18next from "i18next";
import Flag from "react-flagkit";
import CookieConsent from "react-cookie-consent";
import { toggleTheme } from "..";

function TopNavbar() {
  const { t } = useTranslation();
  const { isLoggedIn, userData, avatar } = useUser();
  const history = useHistory();

  const renderLanguage = (lng) => {
    let regionNames = new Intl.DisplayNames([lng.split("_")[0]], {type: 'region'});
    return (
      <Dropdown.Item icon={ <Flag country={ lng.split("_")[1] } /> } onSelect={ () => i18next.changeLanguage(lng) }> { regionNames.of(lng.split("_")[1]) }</Dropdown.Item>
    )
  }

  return (
    <div>
      { isLoggedIn
        ? <Nav>
            <Dropdown trigger={ ['click', 'hover'] } icon={ <Avatar circle src={ avatar } alt="Avatar" size="xs" /> }>
              <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
                <p>{ t('topnavbar_signed-in-name') }</p>
                <strong>{ userData.asTag }</strong>
              </Dropdown.Item>
              <Dropdown.Item divider />
              <Dropdown.Item onSelect={ () => history.push('/dashboard') }>{ t('topnavbar_dashboard') }</Dropdown.Item>
              <Dropdown.Item onSelect={ () => history.push('/logout') }>{ t('topnavbar_sign-out') }</Dropdown.Item>
            </Dropdown>
         </Nav>
        : <Button appearance="primary" href={ "https://discord.com/api/oauth2/authorize?client_id=" + config.clientId + "&redirect_uri=" + config.redirectUri + "&response_type=code&scope=identify%20guilds" }>
            <i className="fab fa-discord"></i> { t('topnavbar_sign-in') }  
          </Button> 
      }
      <Nav>
        <Dropdown title={ " " + t('topnavbar_language') } icon={ <i className="fas fa-language"></i> } >
          { Object.keys(resources).map(renderLanguage) }
        </Dropdown>
        <Whisper placement="bottom" controlId="control-id-hover" trigger="hover" speaker={ <Tooltip>{ t('topnavbar_theme-tooltip') }</Tooltip> }>
          <IconButton appearance="subtle" onClick={ () => toggleTheme() } icon={ <i className="fas fa-moon"></i> } />
        </Whisper>
      </Nav>

      <CookieConsent overlay onAccept={ () => { toaster.push( <Message showIcon type="success" closeable>{ t('cookieconsent_accept-alert') }</Message>) }} buttonText={ t('cookieconsent_accept-button') }>{ t('cookieconsent_info-text') }</CookieConsent>
    </div>
  )
}

export default TopNavbar;