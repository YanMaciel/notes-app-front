import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const NavBar = () => {

    const [success, setSuccess] = useState(false)

    const handleLogout = async (e) => {
        e.preventDefault();
        await api.get('v1/auth/logout', { withCredentials: true });
        localStorage.removeItem('user');
        localStorage.removeItem('signed');
        setSuccess(true);
    };

    if (success)
        return (window.location = '/');

    const logoStyle = {
        fontSize: '36px',
        fontFamily: 'Palette Mosaic'
    };

    return (
        <nav
            className="navbar is-dark"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-brand">
                <a className="navbar-item" href="/" style={{ marginLeft: '32px' }}>
                    <h1 className="has-text-primary" style={logoStyle}>Notes App</h1>
                </a>
                <a
                    role="button"
                    className="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item pt-4" to="/">
                        Home
                    </Link>
                    <Link className="navbar-item pt-4" to="/notes">
                        My Notes
                    </Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        {localStorage.getItem('signed') === 'true' ? (
                            <div className="buttons">
                                <p className="mr-5">Organizing is a journey, not a destination.</p>
                                <button
                                    className="button is-light"
                                    onClick={(e) => handleLogout(e)}
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="buttons">
                                <Link className="button is-primary" to="/register">
                                    Sign up
                                </Link>
                                <Link className="button is-light" to="/login">
                                    Log in
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;