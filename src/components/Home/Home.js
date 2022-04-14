import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>This is Home</h2>
            <h3>Username is: {user ? user.displayName : "No Body"}</h3>
        </div>
    );
};

export default Home;