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
        axios
          .post("http://54.173.32.19:4000/add", formValue)
          .then((response) => {
            if (response.data.status == "success") {
              alert("successfully added");
            } else {
              alert("error....");
            }
          });
      };
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={formValue.firstName}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={formValue.lastName}
                  onChange={readValue}
                />
              </div>
              

              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div className="row">
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">
                      Gender
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        checked={formValue.gender === "male"}
                        onChange={readValue}
                      />
                      <label className="form-check-label" htmlFor="male">
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        checked={formValue.gender === "female"}
                        onChange={readValue}
                      />
                      <label className="form-check-label" htmlFor="female">
                        Female
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="other"
                        value="other"
                        checked={formValue.gender === "other"}
                        onChange={readValue}
                      />
                      <label className="form-check-label" htmlFor="other">
                        Other
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  className="form-control"
                  name="email"
                  value={formValue.email}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  name=""
                  id=""
                  className="form-control"
                  name="phoneNumber"
                  value={formValue.phoneNumber}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={formValue.address}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Blood Group
                </label>

                <select
                  className="form-select"
                  name="bloodGroup"
                  value={formValue.bloodGroup}
                  onChange={readValue}
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={submitValue}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default AddDonors;






