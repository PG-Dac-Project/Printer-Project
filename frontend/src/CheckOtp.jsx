
import axios from 'axios';
import './login.css'

 import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function CheckOtp() {
//   const[msg,setMsg] = useState('');
  const[otp,setOtp] = useState('');

   let history = useHistory();

  var formValue = (args)=>{
    args.target.name =
      args.target.value;
    setOtp(args.target.value);
  }
  var verifyOtp = ()=>{
    var url = 'http://localhost:56304/api/Email';
    debugger
    axios.post(url,{
        Otp:otp
    })
    .then((response)=>{
      history.push("/ResetPassword");
    })
    .catch((error)=>{
      debugger
    })
  }

  return (
    <div className='cont-log'>
      <div>
        <form method='post'  className='mx-auto'>
          <h4 style={{color:"green"}} className='text-center'>Otp is send to this mail {window.sessionStorage.getItem("email")}</h4>
          <div class="form-outline mb-4 mt-5">
            <input type="text" id="form2Example1" name='otp' value={otp} onChange={formValue} class="form-control" />
          </div>



          <button type="button" class="btn btn-primary btn-block mb-4" onClick={verifyOtp}  >Send Otp</button>


          <div class="text-center">
            {/* <p>{msg}</p> */}
          </div>
        </form>
      </div>
    </div>


  );
}
export default CheckOtp;