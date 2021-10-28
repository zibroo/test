import React, { useContext } from 'react';
import { mainContext } from '../../context/MainContext';

const Profile = () => {
    const { adminLogin } = useContext(mainContext)
    return (
        <div className="container-profile">
            <h1>{adminLogin}</h1>
        </div>
    );
};

export default Profile;