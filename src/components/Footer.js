import React from 'react';
import '../css/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaConnectdevelop, FaAngleLeft, FaPhoneAlt, FaPinterest, FaMapMarker } from 'react-icons/fa';



const Footer = () => {
    return (
        <>


            <footer>
                <div className="footer-container">
                    <div className="footer-logo">
                        <FaConnectdevelop className='conn-com' />
                        <h3>IT SERVICES</h3>
                        <div>
                            <p>IT SERVICES believe in<br></br> sharing best practices with<br></br> learners
                                to build a great<br></br>career in IT.<br></br><br></br><br></br><br></br>
                                "It's never too late to learn.. <br></br>and it's never too early either".</p>
                        </div>
                    </div>


                    <div className='coursrs-popular'>
                        <hr style={{ color: 'aqua', backgroundColor: 'aqua', height: 2, width: 150 }} />
                        <h3>company</h3>
                        <div><FaAngleLeft/><a href="/home">Home</a></div>
                        <div><FaAngleLeft/><a href="/about">About</a> </div>
                        <div><FaAngleLeft/><a href="/services">Services</a></div>
                        <div><FaAngleLeft/><a href="/contact">Contact</a></div>
                        <div><FaAngleLeft/><a href="/Bookseat">View Courses Roadmap </a></div>
                        <div><FaAngleLeft/><a href='/register'>Download Carriculum</a></div>

                    </div>

                    <div className='coursrs-popular'>
                        <hr style={{ color: 'aqua', backgroundColor: 'aqua', height: 2, width: 150 }} />
                        <h3>Courses</h3>
                        <div><FaAngleLeft /><a href="/services/full-stack-development">Full stack web development</a></div>
                        <div><FaAngleLeft /><a href="/services/app-development">App development</a> </div>
                        <div><FaAngleLeft /><a href="/services/data-science">Data science</a></div>

                        <div><FaAngleLeft /><a href="/services/cloud-computing">Cloud computing</a></div>
                        <div><FaAngleLeft /><a href='/services/devops-developer'>Devops</a></div>
                        <div><FaAngleLeft /><a href='/services/uiux-design'>Ui/Ux Design</a></div>

                        <div><FaAngleLeft /><a href='/services/dot-net'>Dot Net</a></div>
                        <div><FaAngleLeft /><a href='/services/manual-testing'>Manual Testing</a></div>
                        <div><FaAngleLeft /><a href='/services/big-data'>Big Data</a></div>

                    </div>



                    <div className="contact-details">
                        <hr style={{ color: 'aqua', backgroundColor: 'aqua', height: 2 }} />
                        <h3>contact us</h3>

                        <div className="icon--1">
                            <FaMapMarker />
                        </div>
                        <p>plot no 8, vishvakarma society,<br></br>
                            4th floor, Aundh, pune-411007</p>

                        <div className="icon--1">
                            <FaPhoneAlt />
                        </div>
                        <p>+91 876-234-6896</p>

                        <div className="icon--1">
                            <FaEnvelope />
                        </div>
                        <p>itservices@gmail.com</p>
                    </div>



                </div>

                <hr style={{ color: 'aqua', backgroundColor: 'aqua', height: 2 }} />


                <div className="social-icons">
                    <a href="https://www.facebook.com/" target="_blank" className="icon"><FaFacebook /></a>
                    <a href="https://twitter.com/" target="_blank" className="icon"><FaTwitter /></a>
                    <a href="https://www.pinterest.com/" target="_blank" className="icon"><FaPinterest /></a>
                    <a href="https://www.instagram.com/" target="_blank" className="icon"><FaInstagram /></a>
                </div>


                <div className='copyright'>
                    <h6>© All Rights Reserved.</h6>
                </div>
            </footer >







        </>
    )
}


export default Footer;









