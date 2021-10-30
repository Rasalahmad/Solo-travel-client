import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';

const AllBook = () => {
    const [total, setTotal] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allBook')
            .then(res => res.json())
            .then(data => setTotal(data))
    }, []);

    const handleDelete = id => {
        console.log(id);
        const url = `http://localhost:5000/allBook/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                alert('Deleted Successfully')
                const remaining = total.filter(tl => tl._id !== id)
                setTotal(remaining);
            }
            else{
                alert('Failed to Delete');
            }
            
        })
    }


    return (
        <div>
            <h2>total book is {total.length}</h2>
            {
                total.map(tl => <div
                key = {tl._id}
                >
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Place</th>
                                <th>Type</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{tl?._id}</td>
                                <td>{tl?.name}</td>
                                <td>{tl?.offer}</td>
                                <td>{tl?.email}</td>
                                <td>
                                    <button onClick = {() => handleDelete(tl._id)} className = 'btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>)
            }
        </div>
    );
};

export default AllBook;