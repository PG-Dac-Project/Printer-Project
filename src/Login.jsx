import axios from 'axios';
import './login.css'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const [Login, setLogin] = useState({ email: '', password: '' });
  let history = useHistory();

  var formValue = (args) => {

    var copyOfLogin = { ...Login }
    copyOfLogin[args.target.name] =
      args.target.value;
    setLogin(copyOfLogin);

  }
  var checkUser = () => {
    debugger
    const url = 'http://localhost:56304/api/Users';
    axios.post(url, {
      email: Login.email,
      passwd: Login.password
    })
      .then((response) => {
        debugger
        if (response.status === 200) {
          window.localStorage.setItem('token', response.data.fname);
          window.localStorage.setItem('isLogin', true);
          history.push("/Dashboard")
          window.location.reload(false);
        }
        else {
          alert("wrong email or password?");
        }


      })
      .catch((error) => {
        debugger
        console.log(error.data)
      }
      )
  }
  return (
    <div className='cont-log'>
      <div>
        <form method='post'  className='mx-auto'>
          <h4 className='text-center'> Sign In</h4>
          <div class="form-outline mb-4 mt-5">
            <input type="email" id="form2Example1" name='email' value={Login.email} onChange={formValue} class="form-control" />
            <label class="form-label" for="form2Example1">User ID</label>
          </div>


          <div class="form-outline mb-4">
            <input type="password" id="form2Example2" name='password' value={Login.password} onChange={formValue} class="form-control" />
            <label class="form-label" for="form2Example2">Password</label>
          </div>


          <div class="row mb-4">
            <div class="col d-flex justify-content-center">

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form2Example34" checked />
                <label class="form-check-label" for="form2Example34"> Remember me </label>
              </div>
            </div>

            <div class="col">

              <a href="#!">Forgot password?</a>
            </div>
          </div>


          <button type="button" class="btn btn-primary btn-block mb-4" onClick={checkUser}  >Sign in</button>


          <div class="text-center">
            <p>Not a member? <a href="/Register">Register</a></p>
          </div>
        </form>
      </div>
    </div>


  );
}
export default Login