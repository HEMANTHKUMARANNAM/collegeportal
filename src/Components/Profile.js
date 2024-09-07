import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';

import PersonalDetails from './PersonalDetails';

import app from './firebaseConfig';
import { getDatabase, ref, get } from 'firebase/database';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import './Profile.css';

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || {};

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  const [datavals, setData] = useState([]); 

  const fetchData = async () => {
    const db = getDatabase(app);
    let userdata = [];
    const dbRef = ref(db, 'students/' + email.substring(0, 11));
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          userdata.push(childSnapshot);
        });

        let persondata = [];
        userdata.forEach((element) => {
          console.log(element.key);
          persondata.push({ id: element.key, val: element.val() });
        });

        setData(persondata);
      } else {
        alert('No data found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Failed to fetch data');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand">KARE SIS</a>
          <button className="btn btn-outline-light" onClick={handleLogout}>
            Logout
          </button>
          {/* <button className="btn btn-outline-light" onClick={fetchData}>
            Print Data
          </button> */}
        </div>
      </nav>

      <div className="container-fluid full-page-container">
        <div className="row h-100">
          <div className="col-3 bg-light">
            <ul className="nav flex-column nav-pills" role="tablist">
              
              
              <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab">
                  Profile
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-9">
            <div className="tab-content h-100 d-flex justify-content-center align-items-center">
              <div className="tab-pane fade show active" id="home" role="tabpanel">
                <h3>Welcome, {email || 'Guest'}</h3>
                <PersonalDetails data={datavals}></PersonalDetails>
              </div>
            
              <div className="tab-pane fade" id="contact" role="tabpanel">
                <h3>Contact Content</h3>
                <p>This is the contact tab content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
