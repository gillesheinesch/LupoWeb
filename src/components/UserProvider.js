import React, { useState, useEffect, useContext } from "react";
import { sendRequest } from "../Util";
import { UserContext } from "../contexts/UserContext.js";
import Cookies from "universal-cookie";
import { useHistory, useLocation } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";

const UserProvider = ({ children }) => {
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState();
    const [id, setId] = useState();
    const [avatar, setAvatar] = useState();
    const [userData, setUserData] = useState();

    let location = useLocation();
    useEffect(() => {
        checkLoggedIn();
    }, [location]);

    const checkLoggedIn = async () => {
        let cookies = new Cookies();
        let cookieMissing = false;
        let requiredCookies = ["lupobot_token", "lupobot_id"];
        requiredCookies.forEach(cookie => {
            if (!cookies.get(cookie)) {
                cookieMissing = true;
            }
        });

        if (cookieMissing) {
            setLoggedIn(false);
            setLoading(false);
        } else {
            sendRequest('/users/' + cookies.get('lupobot_id')).then(res => {
                if (res.data.cookiesToken === cookies.get('lupobot_token')) {
                    setUserData(res.data);
                    setId(cookies.get('lupobot_id'));
                    setToken(res.data.cookiesToken);
                    setAvatar(res.data.avatarUrl);

                    setLoggedIn(true);
                    setLoading(false);
                } else {
                    history.push('/logout');
                }
            });  
        }
    }

    if (loading) {
        return (
            <LoadingPage />
        )
    } else {
       return (
            <UserContext.Provider value={{ isLoggedIn, setLoggedIn, setLoading, userData, token, id, avatar }}>
            { children }
            </UserContext.Provider>
       ); 
    }    
};

const withUser = (Child) => (props) => (
    <UserContext.Consumer>
      {(context) => <Child {...props} {...context} />}
    </UserContext.Consumer>
  );

const useUser = () => useContext(UserContext)

export { UserProvider, useUser, withUser };