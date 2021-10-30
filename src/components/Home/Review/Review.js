import React from 'react';

import './Review.css'

const Review = () => {
    return (
        <div className='container'>
            <h2 className='text-center my-5'>People What Says</h2>
            <div className='row g-2'>
                <div className='col-md-4 single-review'>
                    <img src="https://image.freepik.com/free-photo/photo-serious-woman-reading-book-holding-pencil_114579-70807.jpg" alt="" />
                    <h4>Punam Das</h4>
                    <p>This is one of the best tourism site in bangladesh. i trust them a lot and i visit using their facilitics</p>
                </div>
                <div className='col-md-4 single-review'>
                    <img src="https://image.freepik.com/free-photo/smiling-girl-looking-camera-while-reading-book_114579-28656.jpg" alt="" />
                    <h4>Ma Aye Sain Marma Jerine</h4>
                    <p>This is one of the best tourism site in bangladesh. i trust them a lot and i visit using their facilitics</p>
                </div>
                <div className='col-md-4 single-review'>
                    <img src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" alt="" />
                    <h4>Ayon Barua</h4>
                    <p>This is one of the best tourism site in bangladesh. i trust them a lot and i visit using their facilitics</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
