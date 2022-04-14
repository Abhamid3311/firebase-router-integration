import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';


const auth = getAuth(app);
const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>Who Is the User?</h2>
            <h3>Username is: {user ? user.displayName : "Blank"}</h3>
        </div>
    );
};

export default Products;