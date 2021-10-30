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

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/allBook/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert('Deleted')
        } else {
          alert('Delete Failed')
        }
      });
    console.log(id);

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