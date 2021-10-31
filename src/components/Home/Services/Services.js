import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
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
    }, []);

    

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
          });
      };

    return (
        <div className = 'container'>
            <h2 className = 'text-center my-5'>Our Services</h2>
            <div className = 'row'>
                {
                    services.map((service, index) => <div className = 'col-md-4 service'
                    key = {service._id}
                    >
                    <img className = 'service-img' src={service?.img} alt="" />
                    <h2>{service?.name}</h2>
                    <h4>{service?.offer}</h4>
                    <p>{service?.description}</p>
                    <p>{service?.price}</p>
                    <Link to = '/myOrder'>
                    <Button onClick = {() => handleAddToCard(index, service._id)} variant = 'warning'>Book Now</Button>
                    </Link>
                </div>)
                }
            </div>
        </div>
    );
};

export default Services;