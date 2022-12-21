import React from "react";
import { Helmet } from "react-helmet-async";
export default function Login() {
    return (
        <div className="login">
            <Helmet>
                <title>Login</title>
                <meta name="description" content="Login" />
                <link rel="canonical" href="/" />
            </Helmet>
        <div className="login-container">
            <p>Login</p>
            {/* <form>
            <h5>E-mail</h5>
            <input type="text" />
            <h5>Password</h5>
            <input type="password" />
            <button type="submit" className="login-signInButton">
                Sign In
            </button>
            </form>
            <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
            </p>
            <button className="login-registerButton">
            Create your Amazon Account
            </button> */}
        </div>
        </div>
    );
    }