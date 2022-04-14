import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';


const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                navigate(from, { replace: true });
            })
    }
    return (
        <div>
            <h3>Please LogIn</h3>
            <div>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
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