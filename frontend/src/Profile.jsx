import axios from 'axios';
import './login.css'
import './profile.css'

import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function Profile(){
    const[user,setUser] = useState({
        fname:'',
        lname:'',
        email:'',
        mobile:'',
        city:'',
        area:'',
        pincode:'',

        role:''
      });

      var EditProfile = () =>{
             
      }
    return(
        <div>
            <center>
        <div className='cont-log'>
        <div className='profile-layout'>

                <div style={{height:"30px",width:"30px"}}>
                <i class="fa-solid fa-user"></i>
                </div>
                <h4 className='text-center'> Update Profile </h4>
            <div className='profile-flex'>
            <div className='profile-div'>
              <label class="form-label" for="form2Example1"><strong>First Name:</strong> </label>
              <label class="form-label" for="form2Example1">{user.fname}  Nishant </label>
            </div>

            <div className='profile-div'>
              <label class="form-label" for="form2Example2"><strong>Last Name:</strong></label>
              <label class="form-label" for="form2Example1">{user.lname} Mukta </label>
            </div>

            <div className='profile-div'>
              <label class="form-label" for="form2Example2"><strong>Email ID:</strong></label>
              <label class="form-label" for="form2Example1">{user.email} nishantmukta2000@gmail.com </label>
            </div>
  
            <div className='profile-div'>
              <label class="form-label" for="form2Example2"><strong>Mobile No:</strong></label>
              <label class="form-label" for="form2Example1">{user.mobile} 9834904208</label>
            </div>

            <div className='profile-div'>
              <label class="form-label" for="form2Example2"><strong>City:</strong></label>
              <label class="form-label" for="form2Example1">{user.city} City </label>

            </div>
            
            <div className='profile-div'>
              <label class="form-label" for="form2Example2"><strong>Area:</strong></label>
              <label class="form-label" for="form2Example1">{user.area} Area</label>

            </div>
           
            <div className='profile-div'>
              <label class="form-label" for="form2Example2"> <strong>Pincode :</strong></label>
              <label class="form-label" for="form2Example1">{user.pincode} Pincode</label>

            </div>
  
            <button type="button" class="btn btn-primary btn-block mb-4" onClick={EditProfile}>Edit Profile</button>
            </div>
        
  
        </div>
      </div>
      </center>
      </div>
    )
}

export default  Profile;