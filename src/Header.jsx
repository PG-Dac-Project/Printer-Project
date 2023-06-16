import img3 from './images/printer-services-low-resolution-logo-white-on-transparent-background.png'
function Header(){
    return(
        <div className="container-fluid header-container ">
               <div className='header-content'>
               <div><img src={img3} alt="" style={{marginLeft:"1500px",height:"80px",width:"200px"}}/></div>
               </div>
        </div> 
    )
}
export default Header;