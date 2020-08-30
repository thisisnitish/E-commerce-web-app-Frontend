import React, { useState } from 'react';
import Base from '../core/Base';
import { userinfo } from './helper/userapicalls';
import { isAuthenticated } from '../auth/helper';

//Todo: see the todo in userapicalls
const userId = isAuthenticated() && isAuthenticated().user.id;
const UserDashboard = () => {

    const [info, setInfo] = useState({
        name: "",
        email: "",
        phone: "",
        gender: ""
    });
    const response = userinfo(userId);

    userinfo(userId)
    .then(data => {
        console.log("Information is", data);
    })
    .catch(err => {console.log(err)});

    return(
        <Base title="User dashboard" description="Welcome to the user dashboard">
            <h1></h1>
        </Base>
    );
};

export default UserDashboard;