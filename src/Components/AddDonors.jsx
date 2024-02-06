import axios from 'axios';
import React, { useState } from 'react'
import Header from './Header';

const AddDonors = () => {
      const [formValue, changeFormValue] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        phoneNumber: "",
        address: "",
        bloodGroup: "",
      });

      const readValue = (e) => {
        changeFormValue({ ...formValue, [e.target.name]: e.target.value });
      };

      const submitValue = () => {
        console.log(formValue);
        axios.post("http://localhost:4000/add", formValue).then((response) => {
          if (response.data.status == "success") {
            alert("successfully added");
          } else {
            alert("error....");
          }
        });
      };
  return (
    <>
    <Header/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  First Name
                </label>
                <input type="text" className="form-control" name="firstName" value={formValue.firstName} onChange={readValue}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Last Name
                </label>
                <input type="text" className="form-control" name='lastName' value={formValue.lastName} onChange={readValue}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Gender
                </label>
                <input type="text" className="form-control" name="gender" value={formValue.gender} onChange={readValue}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input type="email" name="" id="" className="form-control" name="email" value={formValue.email} onChange={readValue}/>
              </div>
              <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Phone Number
                </label>
               <input type="number" name="" id="" className="form-control" name="phoneNumber" value={formValue.phoneNumber} onChange={readValue}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                 Address
                </label>
                <input type="text" className="form-control" name='address' value={formValue.address} onChange={readValue}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Blood Group
                </label>
                <input type="text" className="form-control" name='bloodGroup' value={formValue.bloodGroup} onChange={readValue}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               <button className="btn btn-success" onClick={submitValue}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default AddDonors