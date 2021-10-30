import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className = 'text-center'>
            <img src="https://i.ibb.co/YZmCM7y/404.png" alt="" />
            <Link to = '/'>
                <button className = 'btn btn-outline-primary'>GO HOME</button>
            </Link>
        </div>
    );
};

export default NotFound;