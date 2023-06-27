import '../navbar_use.css'
import '../Container.css'
import './dashboard.css'
function UpdateEnquiry(){
    return(
        <div className='cont-log'>
        <div>
            <form className='mx-auto'>
                <h4 className='text-center'> Update Enquiry</h4>
                <div class="form-outline mb-4 mt-5">
                    <input type="text" id="form2Example1" class="form-control" disabled />
                    <label class="form-label" for="form2Example1">Model Name</label>
                </div>


                <div class="form-outline mb-4">
                    <input type="text" id="form2Example2" class="form-control" disabled />
                    <label class="form-label" for="form2Example2">Puchase Date</label>
                </div>

                <div class="form-outline mb-4">
                    <input type="text" id="form2Example3" class="form-control" />
                    <label class="form-label" for="form2Example3">Product Serial Number</label>
                </div>

                <div class="form-outline mb-4">
                    <textarea class="form-control md-4" placeholder="Leave description here" id="floatingTextarea2" style={{height: 100}}></textarea>
                    <label for="floatingTextarea2">Description</label>
                </div>
                {/* <div class="row mb-4">
        <div class="col d-flex justify-content-center">

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="form2Example34" checked />
            <label class="form-check-label" for="form2Example34"> Remember me </label>
          </div>
        </div>

        <div class="col">

          <a href="#!">Forgot password?</a>
        </div>
      </div> */}


                <button type="submit" class="btn btn-primary btn-block mb-4">Submit</button>


                {/* <div class="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
      </div> */}
            </form>
        </div>
    </div>
    )
}
export default UpdateEnquiry;