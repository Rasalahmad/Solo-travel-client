import React, {useState, useEffect} from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Servicers.css'

const Services = () => {

    const {user} = useAuth();
    // console.log(user.email)

    const [services, setServices] = useState([]);
    
    useEffect( () => {
        fetch('https://protected-cliffs-33011.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [user.email]);

    

    const handleAddToCard = (index, id) => {
        const data = services[index];
        data.email = user.email;
        data.status = 'pending';
        fetch(`https://protected-cliffs-33011.herokuapp.com/addOrders`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if(result.insertedId){
                const remaining = services.filter(service => service._id !== id)
                setServices(remaining);
            }
          })
          .catch((error) => alert(error.message))
      };

    return (
        <div className = 'container'>
            <h2 className = 'text-center my-5'>Our Services</h2>
            {services ? (<div className = 'row'>
                {
                    services.map((service, index) => <div className = 'col-md-4 service'
                    key = {service._id}
                    >
                    <img className = 'service-img' src={service?.img} alt="" />
                    <h2>{service?.name.toUpperCase()}</h2>
                    <h4>{service?.offer.toString().toUpperCase()}</h4>
                    <p>{service?.description.slice(0, 150)}</p>
                    <p>Price: {service?.price}</p>
                    <Link to = '/myOrder'>
                    <Button onClick = {() => handleAddToCard(index, service._id)} variant = 'warning'>Book Now</Button>
                    </Link>
                </div>)
                }
            </div>): (<Spinner animation="border" variant="success" />)}
        </div>
    );
};

export default Services;