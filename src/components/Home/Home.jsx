import React, { useState } from 'react';
import './Home.css';
import Cookies from 'js-cookie';
import Login from '../Login/Login';

const Home = () => {
    const [loggedIn, setLoggedIn] = useState(true);

    const handleLogout = () => {
        Cookies.remove('jwt');
        setLoggedIn(false);
    };
    if (!loggedIn) {
        return <Login />;
    }
    const handleClientApp = () => {
        Cookies.remove('jwt');
        window.location.href = "https://pos-client-app-tim56.vercel.app";
    }

    return (
        <div className="button-container">
            <button onClick={handleLogout}>Log out</button>
        </div>
    );
};

export default Home;