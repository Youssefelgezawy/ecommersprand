import "./Footer.css";
import logo from "../../assets/logo.png"
import facebook from "../../assets/facebook.png";
import twiter from "../../assets/twiter.png";
import linkedin from "../../assets/linkedin.png";
import instegram from "../../assets/instegram.png";
import app from "../../assets/app.png";
import google from "../../assets/google.png";

function Footer() {
    return (
        <>
            <div className="footer">


                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-sm-6">
                            <div className="logo">
                                <img src={logo} alt="logo" />
                                <h6>Brand</h6>
                            </div>
                            <p>Best information about the company gies here but now lorem ipsum is</p>
                            <div className="social-media">
                                <ul>
                                    <li><a href="https://facebook.com/" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" /></a></li>
                                    <li><a href="https://twiter.com/" target="_blank" rel="noreferrer"><img src={twiter} alt="twiter" /></a></li>
                                    <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" /></a></li>
                                    <li><a href="https://www.instegram.com/" target="_blank" rel="noreferrer"><img src={instegram} alt="instegram" /></a></li>
                                </ul>
                            </div>
                        </div>



                        <div className="col-md-2 col-sm-6">
                            <h2>About</h2>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">find store</a></li>
                                <li><a href="#">Categories</a></li>
                                <li><a href="#">Blogs</a></li>
                            </ul>
                        </div>



                        <div className="col-md-2 col-sm-6">
                            <h2>About</h2>
                            <ul>
                                <li><a href="#">Partnership</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">find store</a></li>
                                <li><a href="#">Categories</a></li>
                                <li><a href="#">Blogs</a></li>
                            </ul>
                        </div>



                        <div className="col-md-2 col-sm-6">
                            <h2>Information</h2>
                            <ul>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Money Refund</a></li>
                                <li><a href="#">Shipping</a></li>
                                <li><a href="#">Cotact Us</a></li>
                            </ul>

                        </div>



                        <div className="col-md-2 col-sm-6">
                            <h2>For users</h2>
                            <ul>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Register</a></li>
                                <li><a href="#">Settings</a></li>
                                <li><a href="#">My Ourders</a></li>
                            </ul>

                        </div>



                        <div className="col-md-2 col-sm-6">
                            <h2>Get app</h2>
                            <div className="imgs">
                                <div className="app">
                                    <img src={app} alt="app" />
                                </div>
                                <div className="google">
                                    <img src={google} alt="google" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>








            </div>
        </>
    )
}

export default Footer;