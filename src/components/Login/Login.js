import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { user, googleSignIn } = useFirebase();
    return (
        <div>
            <h3>Please LogIn</h3>
            <div>
                <button onClick={googleSignIn}>Google Sign In</button>
            </div>
            <form action="">
                <input type="email" placeholder='your email' /> <br />
                <input type="password" placeholder='your password' /> <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;