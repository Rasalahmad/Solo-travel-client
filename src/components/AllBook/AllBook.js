import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';

const AllBook = () => {
    const [total, setTotal] = useState([]);
    useEffect(() => {
        fetch('https://protected-cliffs-33011.herokuapp.com/allBook')
            .then(res => res.json())
            .then(data => setTotal(data))
    }, []);

    const handleDelete = id => {
        // console.log(id);
        fetch(`https://protected-cliffs-33011.herokuapp.com/allBook/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            if(result.deletedCount){
                alert('Deleted Successfully')
                const remaining = total.filter(order => order._id !== id)
                setTotal(remaining);
            }
            else{
                alert('Failed to Delete');
            }
        });
    };
    const handleApproved = id => {
        // console.log(id);
        fetch(`https://protected-cliffs-33011.herokuapp.com/update/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(total.status),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
            alert('Approved')
        } else {
            alert('Rejected');
        }
      });
    // console.log(data);
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
                                <th colSpan="2">Action</th>
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
                                <td>
                                    <button onClick = {() => handleApproved(tl._id)} className = 'btn btn-success'>Approve</button>
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