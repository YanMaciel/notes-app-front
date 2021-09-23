import React, { useState } from 'react';
import api from '../services/api';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleLogin = async (e) => {
        let form = document.getElementById('loginForm');

        form.checkValidity();
        form.reportValidity();

        e.preventDefault();

        await api
            .post('v1/auth/login', { email, password }, { withCredentials: true })
            .then((result) => {
                console.log(result);
                if (result.status === 200) {
                    localStorage.setItem('user', email);
                    localStorage.setItem('signed', true);
                    setSuccess(true);
                }
            })
            .catch((e) => {
                setError('Invalid information');
            });
    };

    if (localStorage.getItem('signed'))
        return (window.location = '/notes');

    if (success)
        return (window.location = '/notes');

    return (
        <section
            className="hero is-white is-fullheight"
        >
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form action="true" className="box" id="loginForm">
                                <div className="field">
                                    <label htmlFor="true" className="label">
                                        Email
                                    </label>
                                    <div className="control has-icons-left">
                                        <input
                                            type="email"
                                            placeholder="e.g. bobsmith@gmail.com"
                                            className="input"
                                            required
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-envelope" />
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="true" className="label">
                                        Password
                                    </label>
                                    <div className="control has-icons-left">
                                        <input
                                            type="password"
                                            placeholder="*******"
                                            className="input"
                                            required
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-lock" />
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="true" className="checkbox">
                                        <input type="checkbox" />
                                        <span className="ml-2">Remember me</span>
                                    </label>
                                </div>

                                {error ? (
                                    <div className="field">
                                        <p className="subtitle is-6 has-text-danger has-text-centered">
                                            {error}
                                        </p>
                                    </div>
                                ) : null}

                                <div className="field">
                                    <button
                                        className="button is-primary is-fullwidth"
                                        onClick={(e) => handleLogin(e)}
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;