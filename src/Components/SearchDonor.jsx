import React, { useState } from 'react'
import Header from './Header';
import axios from 'axios';

const SearchDonor = () => {
    const [data, changeData] = useState({ bloodGroup: "" });

    const readValue=(e)=>(
        changeData({...data,[e.target.name]:e.target.value})
    )

const [response,changeResponse]=useState([])


    const submitValue=()=>{
        console.log(data)
        axios.post("http://localhost:4000/search",data).then(
            (response)=>{
                console.log(response)
                if(response.data.data.length===0){
                    alert("Donor Not Found...")
                    changeResponse([])
                }else{
                    changeResponse(response.data.data)
                    
                }
            }
        )
    }


  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Blood Group
                </label>
                

                <select
                  id=""
                  className="form-select"
                  name="bloodGroup"
                  value={data.bloodGroup}
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
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={submitValue}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Sl.No</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Mobile Number</th>
                </tr>
              </thead>
              <tbody>
                {response.map((value, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{value.firstName}</td>
                      <td>{value.lastName}</td>
                      <td>{value.phoneNumber}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchDonor