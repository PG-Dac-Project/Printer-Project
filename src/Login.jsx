import './login.css'


function Login() {
  return (
    <div className='cont-log'>
      <div>
        <form className='mx-auto'>
          <h4 className='text-center'> Sign Up</h4>
          <div class="form-outline mb-4 mt-5">
            <input type="email" id="form2Example1" class="form-control" />
            <label class="form-label" for="form2Example1">User ID</label>
          </div>


          <div class="form-outline mb-4">
            <input type="password" id="form2Example2" class="form-control" />
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


          <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>


          <div class="text-center">
            <p>Not a member? <a href="#!">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  

  );
}
export default Login