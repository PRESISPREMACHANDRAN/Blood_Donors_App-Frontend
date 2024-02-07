import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './Header';

const ViewAllDonors = () => {
    const [donors, changeDonors] = useState({ data: [] });

    const fetchData = () => {
      axios.post("http://localhost:4000/viewAll").then((response) => {
        console.log(response.data);
        changeDonors(response.data);
      });
    };

    useEffect(() => {
      fetchData();
    }, []);
  return (
    <>
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Sl.No</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Address</th>
                      <th scope="col">Blood Group</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donors.data.map((value, index) => {
                      return (
                        <tr>
                          <th scope="row">1</th>
                          <td>{value.firstName}</td>
                          <td>{value.lastName}</td>
                          <td>{value.gender}</td>
                          <td>{value.email}</td>
                          <td>{value.phoneNumber}</td>
                          <td>{value.address}</td>
                          <td>{value.bloodGroup}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewAllDonors