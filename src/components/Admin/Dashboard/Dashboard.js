import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddService from '../../AddService/AddService';
import AllBook from '../../AllBook/AllBook';
import MyOrder from '../../MyOrder/MyOrder';
import './Dashboard.css';

const Dashboard = () => {
    const [control, setControl] = useState("addService");

    console.log(control);
    return (

        <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container">
            <div className="col-md-3 ">
              <div className="admin-area p-1">
                <h6>Dashboard</h6>
                <div className="all-menu mt-5">
                  <li
                    onClick={() => setControl("addService")}
                    className="admin-menu p-2"
                  >
                    Add Place
                  </li>
                  <li
                    onClick={() => setControl("myOrder")}
                    className="admin-menu p-2"
                  >
                    My Order
                  </li>
                  <li
                    onClick={() => setControl("allBook")}
                    className="admin-menu p-2"
                  >
                    Manage Order
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-9 text-center  text-center">
              {control === "addService" && <AddService></AddService>}
              {control === "myOrder" && <MyOrder></MyOrder>}
              {control === "allBook" && <AllBook></AllBook>}
            </div>
          </div>
        </div>
      </div>
    </div>


        // <div className = 'text-center container'>
        //     <h2>Dashboard</h2>
        //     <div className = 'row'>
        //         <div className = 'col-md-4 title-site'>
        //             <Link to = 'addService'>
        //                 Add Place
        //             </Link>
        //             <Link to = 'myOrder'>
        //                 My Book
        //             </Link>
        //             <Link to = 'allBook'>
        //                 All Booked
        //             </Link>
        //         </div>
        //         <div className = 'col-md-8'>
        //             <h2>Details</h2>
        //             <AddService></AddService>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Dashboard;