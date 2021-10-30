import React, {useState, useEffect} from 'react';
import './Popular.css';

const Popular = () => {

    const [places, setPlaces] = useState([])

        useEffect( () => {
        fetch('http://localhost:5000/popular')
        .then(res => res.json())
        .then(data => setPlaces(data))
    }, [])

    return (
        <div className = 'container mt-5'>
            <h2 className = 'text-center text-success my-5'>Popular Places</h2>
            <div className = 'row'>
                {
                    places.map(place => <div className = 'col-md-4'
                    key = {place._id}
                    >
                        <img src={place?.img} className = 'popular-img' alt="" />
                        <h4>{place?.name}</h4>
                        <p>{place.location}</p>
                        <div className = 'footer'>
                            <p>Rating: {place?.review}</p>
                            <p>Duration: {place?.duration}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Popular;
