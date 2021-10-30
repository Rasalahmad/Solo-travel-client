import React from 'react';
import Popular from '../../Popular/Popular';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Popular></Popular>
            <Review></Review>
        </div>
    );
};

export default Home;