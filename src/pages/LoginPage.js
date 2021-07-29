import React from "react";
import Cookies from 'universal-cookie';
import HomePage from "./HomePage.js";
import { useHistory, useLocation } from "react-router-dom";
import { sendRequest } from "../Util.js";
import { config } from "../App.js";

function LoginPage() {
    const search = useLocation().search;
    const history = useHistory();
    const code = new URLSearchParams(search).get('code');
    let cookies = new Cookies();

    if (code != null) {
        sendRequest('/oauth2?code=' + code + '&redirect=' + config.redirectUri).then(res => {
            if (res.data.id != null) {
                cookies.set('lupobot_id', res.data.id); 
                cookies.set('lupobot_token', code);
            }
            history.push('/');
        });
    }

    return (
     <HomePage />
    )
}

export default LoginPage;