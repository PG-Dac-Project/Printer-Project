import './use.css'
import user from './images/png-transparent-blue-microphones-kiwi-youtube-song-microphone-electronics-microphone-piano.png'
import ke from './images/key.jpg'

function Login() {
    return (
        <div className="container-fluid home-container">
            <div className='home-div1-content'>
                <div className='loginblock'>
                  <div className='forDivLogIn'>
                    <div className='forLogInInput'>
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping"><img src={user} alt='img' style={{ height: '20px', width: '20px' }} /></span>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <div className='forLogInInput'>
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping"><img src={ke} alt='img2' style={{ height: '20px', width: '20px' }} /></span>
                            <input type="text" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <div className='forLogInInput'>
                        <center><button type="button" class="btn btn-success btn-lg" >Log In</button></center>
                    </div>
                    <h6 style={{ color: "white", marginLeft: '350px', }}>Forget Password ?</h6>
                    <hr style={{ color: 'white', borderBlockStyle: 'solid' }}></hr>
                    <h6 style={{ color: "white", marginLeft: '10px' }}>Don't have Account  ?</h6>
                    <h6 style={{ color: "white", marginLeft: '10px' }}>Sign Up</h6>

 
             
                </div>
                </div>
                
            </div>
        </div>


    );
}
export default Login