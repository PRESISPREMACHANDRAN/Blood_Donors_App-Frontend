import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <Link class="navbar-brand" >
          Blood Donor App
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            
            <Link class="nav-item nav-link" to="/">
              Add Donors
            </Link>
            <Link class="nav-item nav-link" to="/delete">
              Delete Donor
            </Link>
            <Link class="nav-item nav-link" to="/search">
             Search Donor
            </Link>
            <Link class="nav-item nav-link" to="/viewAll">
             View All Donors
            </Link>
           
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header