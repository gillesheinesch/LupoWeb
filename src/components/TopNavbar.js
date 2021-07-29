import React from "react";
import { Avatar, Button, Dropdown, Nav } from "rsuite";
import { useUser } from "./UserProvider";
import { useHistory } from "react-router-dom";
import { config } from "../App.js";
import "./TopNavbar.css";

function TopNavbar() {
  const { isLoggedIn, userData, avatar } = useUser();
  const history = useHistory();

  return (
    <div>
      { isLoggedIn
        ? <Nav>
            <Dropdown icon={ <Avatar circle src={ avatar } alt="Avatar" size="xs" /> }>
            <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
              <p>Signed in as</p>
              <strong>{ userData.asTag }</strong>
            <Dropdown.Item divider />
            </Dropdown.Item>
              <Dropdown.Item onSelect={ () => history.push('/dashboard') }>Dashboard</Dropdown.Item>
              <Dropdown.Item onSelect={ () => history.push('/logout') }>Sign out</Dropdown.Item>
            </Dropdown>
         </Nav>
        : <Button appearance="primary" href={ "https://discord.com/api/oauth2/authorize?client_id=" + config.clientId + "&redirect_uri=" + config.redirectUri + "&response_type=code&scope=identify%20guilds" }>
            <i className="fab fa-discord"></i> Login  
          </Button>
      }
    </div>
  )
}

export default TopNavbar;