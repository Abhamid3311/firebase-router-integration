import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>Who Is the User?</h2>
            <h3>Username is: {user ? user.displayName : "Blank"}</h3>
        </div>
    );
};

export default Products;