import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caro-img"
                        src="https://everestholidays.com.bd/wp-content/uploads/2019/10/Saint-martin.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className = 'text-primary'>COX BAZAR</h3>
                        <p className = 'text-primary'>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caro-img"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sohBV85OSyWyoiAkSKhJrI_ZOFim6BfHNA&usqp=CAU"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>NILACOL</h3>
                        <p>Nilachol Parjatan Center is one of the beautiful place in Bangladesh. It is located in Bandarban. There are high hills and green trees that can be pleasure </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caro-img"
                        src="https://amazingtoursbd.com/tour_image/16051732300b.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>KUAKATA</h3>
                        <p>Kuakata is a town in southern Bangladesh known for its panoramic sea beach. Kuakata beach is a sandy expanse 18 kilometres long and 3 kilometres wide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;