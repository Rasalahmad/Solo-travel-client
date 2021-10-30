import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './MyOrder.css';


const MyOrder = () => {

    const {user} = useAuth();
    // const [services, setServices] = useState([]);

    const [orders, setOrders] = useState([])
    // const email = {user?.email};
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user?.email]);
    // console.log(orders);


    const handleDelete = id => {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            if(result.deletedCount){
                alert('Deleted Successfully')
                const remaining = orders.filter(order => order._id !== id)
                setOrders(remaining);
            }
            else{
                alert('Failed to Delete');
            }
        });
    }



    return (
        <div>
            <h1>Your Total Book is {orders.length}</h1>
            <div className="all-products">
                <div className="row container text-center">
                    {orders?.map((pd) => (
                        <div className="col-md-6 col-lg-4"
                        key = {pd._id}
                        >
                            <div className=" border border p-2 m-2">
                                <img src={pd?.img} className = 'img' alt="" />
                                <h5>{pd?.name}</h5>
                                <h5>{pd?.price}</h5>
                                <h6>{pd?.description}</h6>
                                <Button onClick = {() => handleDelete(pd._id)} variant = 'danger'>Cancel</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className = 'text-center mt-5'>
            <Link to = 'userDetails'>
                <button className = 'text-center w-75 bg-success text-white'>Place Order</button>
            </Link>
            </div>
        </div>
    );
};

export default MyOrder;