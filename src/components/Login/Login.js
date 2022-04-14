import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';


const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div>
            <h3>Please LogIn</h3>
            <div>
                <button onClick={() => signInWithGoogle()}>Google Sign In</button>
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