import React, { useState } from 'react'
import Header from './Header';
import axios from 'axios';

const SearchDonor = () => {
    const [data, changeData] = useState({ bloodGroup: "" });

    const readValue=(e)=>(
        changeData({...data,[e.target.name]:e.target.value})
    )


    const submitValue=()=>{
        console.log(data)
        axios.post("http://localhost:4000/search",data).then(
            (response)=>{
                console.log(response)
                if(response.data.length===0){
                    alert("Donor Not Found...")
                }else{
                    alert("Donor data found")
                    
                }
            }
        )
    }


  return (
    <>
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Blood Group
                </label>
                <input type="text" className="form-control" name="bloodGroup" value={data.bloodGroup} onChange={readValue} />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={submitValue}>Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchDonor