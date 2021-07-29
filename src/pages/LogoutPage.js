import React from "react";
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';
import { useUser } from "../components/UserProvider.js";
import HomePage from "./HomePage.js";

function LoginPage() {
    let cookies = new Cookies();
    const history = useHistory();
    const { setLoggedIn, setLoading } = useUser();

    let requiredCookies = ["lupobot_token", "lupobot_id"];
    requiredCookies.forEach(cookie => {
        cookies.remove(cookie);
    });
    setLoggedIn(false);
    setLoading(false);

    history.push('/');

    return (
     <HomePage />
    )
}

export default LoginPage;