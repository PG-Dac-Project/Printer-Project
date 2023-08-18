import { Link, Switch, Route, useHistory } from 'react-router-dom';
import Home from './Home';
import Software from './SofwareDrivers';
import Products from './Products';
import About from './About';
import Dashboard from './Dashboard_Folder/Dashboard';
import Notfound from './NotFound';
import ContactUs from './ContactUs';
import Header from './Header';
import Footer from './Footer';
import './navbar_use.css'
import './Container.css'
import Login from './Login';
import CreateEnquiry from "./Dashboard_Folder/CreateEnquiry"
import UpdateEnquiry from './Dashboard_Folder/UpdateEnquiry';
import ViewEnquiryStatus from './Dashboard_Folder/ViewEnquiryStatus';
import ViewFaq from './Dashboard_Folder/ViewFaq';
import Register from './Register';
import { useEffect, useState } from 'react';
function Landing() {
    const [isLogin, setLogin] = useState(false);
    const [curUser, setcurUser] = useState(null);
    // wheneever isLogin is chnage this useEffect is get called

    useEffect(() => {
        debugger
        setLogin(window.localStorage.getItem("isLogin"));
        setcurUser(window.localStorage.getItem("token"));

    },[isLogin]);

    let history = useHistory();
    var PushSome = () => {
        history.push("/Login");
    }
    var PushLogout = () => {
        localStorage.clear();
        setLogin(false);
    }
    return (
        <div className='main-container'>
            <Header></Header>
            <div >
                <nav className="navbar navbar-expand-lg navbar-light sticky-top ">
                    <div class="container ">
                        <a class="navbar-brand" href="/"><h1>Printer Services</h1></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon "></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link to="/" className="nav-link active "> Home </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/products" className="nav-link active ">Products</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/Software&Drivers" className="nav-link active ">Software & Drivers</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/dashboard" className="nav-link active ">Dashboard</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/about" className="nav-link active ">AboutUs</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/ContactUs" className="nav-link active ">ContactUS</Link>
                                </li>
                                <nav navbar>
                                    {
                                        isLogin && (
                                            <>
                                                <div>
                                                    <li class="nav-item">
                                                        <h6>Welcome {curUser}</h6>
                                                    </li>
                                                </div>
                                                <div>
                                                    <li class="nav-item">
                                                        <button class="btn btn-warning" type="submit" onClick={PushLogout}>Log out</button>
                                                    </li>
                                                </div>

                                            </>
                                        )
                                    }
                                    {
                                        !isLogin && (
                                            <div>
                                                <li class="nav-item">
                                                    <button class="btn btn-warning" type="submit" onClick={PushSome}>Log in</button>
                                                </li>
                                            </div>
                                        )
                                    }
                                </nav>

                            </ul>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path='/products' component={Products} />
                    <Route exact path='/Software&Drivers'>{Software}</Route>
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/about" component={About} />
                    <Route path="/ContactUs" component={ContactUs} />
                    <Route path="/login" component={Login} />
                    <Route exact path='/CreateEnquiry' component={CreateEnquiry} />
                    <Route exact path='/UpdateEnquiry' component={UpdateEnquiry} />
                    <Route exact path='/ViewEnquiryStatus' component={ViewEnquiryStatus} />
                    <Route exact path='/ViewFaq' component={ViewFaq} />
                    <Route exact path='/Register' component={Register} />
                    <Route path="*" component={Notfound} />
                </Switch>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default Landing;

