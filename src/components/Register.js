import React, { useState } from 'react';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const URL = 'http://notesapi.ecdb.com.br/v1/auth/register';

    const handleRegistration = async (e) => {

        let form = document.getElementById('signUpForm');

        form.checkValidity();
        form.reportValidity();

        e.preventDefault();

        var options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password }),
        };

        await fetch(URL, options)
            .then(async (res) => {
                if (res.status === 200) setSuccess(true);
                else setError(true);
                return res.json();
            })
            .then((result) => {
                console.log(result);
            });
    }

    return (
        <section className="hero is-white is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form action="true" className="box" id="signUpForm">
                                {!success ? (
                                    <React.Fragment>
                                        <div className="field">
                                            <label className="label">Name</label>
                                            <div className="control">
                                                <input
                                                    className="input"
                                                    type="text"
                                                    placeholder="Bob Smith"
                                                    required
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <label className="label">Email</label>
                                            <div className="control has-icons-left has-icons-right">
                                                <input
                                                    className="input"
                                                    type="email"
                                                    placeholder="e.g bobsmith@gmail.com"
                                                    required
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-envelope" />
                                                </span>
                                                <span className="icon is-small is-right"></span>
                                            </div>
                                        </div>

                                        <div className="field">
                                            <label className="label">Password</label>
                                            <div className="control has-icons-left has-icons-right">
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
                                            <div className="control">
                                                <label className="checkbox">
                                                    <input type="checkbox" required />
                                                    <span className="ml-2">
                                                        I agree to the <a href="#">terms and conditions</a>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>

                                        {error ? (
                                            <div className="field">
                                                <p className="subtitle is-6 has-text-danger has-text-centered">
                                                    Something went wrong, please validate your data.
                                                </p>
                                            </div>
                                        ) : null}

                                        <div className="field">
                                            <div className="control">
                                                <button
                                                    className="button is-primary is-fullwidth"
                                                    onClick={(e) => handleRegistration(e)}
                                                >
                                                    Sign Up
                                                </button>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ) : (
                                    <div className="is-flex is-flex-direction-column">
                                        <i
                                            className="fas fa-check-square has-text-centered"
                                            style={{ fontSize: '48px', color: 'hsl(171, 100%, 41%)' }}
                                        ></i>
                                        <h3 className="has-text-centered">
                                            Welcome {name}, you are now registered.
                                        </h3>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;