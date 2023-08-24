import axios from 'axios';
import './login.css'
import { useState } from 'react';
import Swal from 'sweetalert2';

function Register() {
  const[user,setUser] = useState({
    fname:'',
    lname:'',
    email:'',
    mobile:'',
    city:'',
    area:'',
    pincode:'',
    password:'',
    cpassword:'',
    role:''
  });

  var handleChange=(args)=>{
     var copyOfuser = {...user};
     copyOfuser[args.target.name] = args.target.value;
     setUser(copyOfuser);

  }

  var handleRegister=()=>{
    debugger
    const url = 'http://localhost:56304/api/Register';
    axios.post(url,
      {
        fname: user.fname,
        lname: user.lname,
        email: user.email,
        mobile: user.mobile,
        passwd: user.password,
        city: user.city,
        area: user.area,
        pincode: user.pincode,
        role:user.role
    })
    .then((response)=>{
      debugger
      console.log(response.data)
      setUser({
        fname:'',
        lname:'',
        email:'',
        mobile:'',
        city:'',
        area:'',
        pincode:'',
        password:'',
        cpassword:'',
        role:''
    });
      if(response.status === 200){
        Swal.fire(
          'Good job!',
          'Your Registration is successfully!',
          'success'
        )
        
      }
      else{

      }

    })
    .catch((error)=>{
      debugger
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    })
  }
  
  return (
    <div className='cont-log'>
      <div>
        <form  method='post'  className='mx-auto' >

          <div class="form-outline mb-4 mt-5">
            <input type="text" id="form2Example1" name='fname' value={user.fname} onChange={handleChange} class="form-control" />
            <label class="form-label" for="form2Example1">First Name</label>
          </div>

          <div class="form-outline mb-4">
            <input type="text" id="form2Example2" name='lname' value={user.lname} onChange={handleChange} class="form-control" />
            <label class="form-label" for="form2Example2">Last Name</label>
          </div>


          <div class="form-outline mb-4">
            <input type="email" name='email' value={user.email} onChange={handleChange}class="form-control" />
            <label class="form-label" for="form2Example2">email</label>
          </div>

          <div class="form-outline mb-4">
            <input type="number"  name='mobile' value={user.mobile} onChange={handleChange} class="form-control" />
            <label class="form-label" for="form2Example2">Mobile No</label>
          </div>

          <div class="form-outline mb-4">
            <input type="text"  name='city' value={user.city} onChange={handleChange} class="form-control" />
            <label class="form-label" for="form2Example2">City</label>
          </div>

          <div class="form-outline mb-4">
            <input type="text"  name='area' value={user.area} onChange={handleChange} class="form-control" />
            <label class="form-label" for="form2Example2">Area</label>
          </div>

          <div class="form-outline mb-4">
            <input type="number"  name='pincode' value={user.pincode} onChange={handleChange} class="form-control" />
            <label class="form-label" for="form2Example2">Pincode</label>
          </div>

          <div class="form-outline mb-4">
            <input type="password"  name='password' value={user.password} onChange={handleChange} class="form-control" />
            <label class="form-label" for="form2Example2">Password</label>
          </div>

          <div class="form-outline mb-4">
            <input type="password"  name='cpassword' value={user.cpassword} onChange={handleChange} class="form-control" />
            <label class="form-label" for="form2Example2">Confirm Password</label>
          </div>

          <div class="form-outline mb-4">
          <select class="form-select" name='role' value={user.role} onChange={handleChange}>
            <option selected>Select one</option>
            <option value="Agent">Agent</option>
            <option value="Technical">Technical Person</option>
            <option value="Customer">Customer</option>
          </select>
          <label class="form-label" for="form2Example2">Register  As</label>
          </div>



          <button type="button" onClick={handleRegister} class="btn btn-primary btn-block mb-4">Register Here</button>

        </form>
       

      </div>
    </div>
  )
}

export default Register;