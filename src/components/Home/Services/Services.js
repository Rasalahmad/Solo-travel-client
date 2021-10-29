import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import './Servicers.css'

const Services = () => {

    const [services, setServices] = useState([]);
    
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);

    const handleDelete = id => {
        fetch(`http://localhost:5000/services/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            if(result.deletedCount){
                alert('Deleted Successfully')
                const remaining = services.filter(service => service._id !== id)
                setServices(remaining);
            }
        });
    }

    return (
        <div className = 'container'>
            <h2 className = 'text-center my-5'>Our Services</h2>
            <div className = 'row'>
                {
                    services.map(service => <div className = 'col-md-4 service'
                    key = {service._id}
                    >
                    <img className = 'service-img' src={service?.img} alt="" />
                    <h2>{service?.name.toUpperCase()}</h2>
                    <h4>{service?.offer.toString().toUpperCase()}</h4>
                    <p>{service?.description}</p>
                    <p>{service?.price}</p>
                    <Button onClick = {() => handleDelete(service._id)} variant = 'danger'>Delete</Button>
                </div>)
                }
            </div>
        </div>
    );
};

export default Services;