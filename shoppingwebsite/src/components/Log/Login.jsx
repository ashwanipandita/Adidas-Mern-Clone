import './Login.css'; // Importing the CSS file
import adidasImage1 from '../../Adidas-Pictures/1.png';
import '@fortawesome/fontawesome-free/css/all.css';
function Login() {
    return (
        <div className="header head-header">
            <div className="hd1 flex">
                <div>
                    <p> FREE DELIVERY, RETURN & EXCHANGE </p>
                </div>
                <div className="icon-down">
                    <i className="fa-solid fa-angle-down"></i>
                </div>
            </div>

            <div className="hd2">
                <p>help</p>
                <p>orders and returns</p>
                <p>sign up</p>
                <a href="login.html">
                    <p>log in</p>
                </a>
            </div>

            <div className="hd3">
                <div className="logo">
        <img src={adidasImage1} alt="" />
                </div>

                <div className="categories ">
                    <div className="cts">
                        <a href="men.html">
                            <p> <b>MEN </b></p>
                        </a>
                    </div>
                    <div className="cts">
                        <a href="women.html">
                            <p> <b>WOMEN </b></p>
                        </a>
                    </div>
                    <div className="cts">
                        <a href="kids.html">
                            <p> <b>KIDS </b></p>
                        </a>
                    </div>
                    <div className="cts">
                        <p>SPORTS</p>
                    </div>
                    <div className="cts">
                        <p>BRANDS</p>
                    </div>
                    <div className="cts">
                        <p>LIFESTYLE</p>
                    </div>
                    <div className="cts red-clr">
                        <p>OUTLETS</p>
                    </div>
                </div>

                <div className="search-box">
                    <input type="text" className="search-bar" placeholder="Search "/>
                    <button className="btn">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <div className="options-3">
                    <div className="profile">
                        <i className="fa-regular fa-user"></i>
                    </div>
                    <div className="heart">
                        <i className="fa-regular fa-heart"></i>
                    </div>
                    <div className="cart">
                        <a href="Cart.html"> <i className="fa-solid fa-bag-shopping"></i> </a>
                    </div>
                </div>
            </div>

            <div id="mdl-body">
                <div id="left-mdl">
                    <div className="lm-img">
                        <img src="https://www.adidas.co.in/glass/react/f69593a/assets/img/account-portal-page-inline.png" alt=""/>
                    </div>
                    <div className="lm-heading">
                        <h2>JOIN THE CLUB. GET <br/> REWARDED.</h2>
                    </div>
                    <div className="lm-data">
                        <p>JOIN ADICLUB. GET REWARDED TODAY.</p>
                        &nbsp;&nbsp; <i className="fa-solid fa-check"></i> Free delivery <br/>
                        &nbsp;&nbsp; <i className="fa-solid fa-check"></i> A 15% off voucher for your next purchase <br/>
                        &nbsp;&nbsp; <i className="fa-solid fa-check"></i> Access to Members Only products and sales <br/>
                        &nbsp;&nbsp; <i className="fa-solid fa-check"></i> Access to adidas Running and Training apps <br/>
                        &nbsp;&nbsp; <i className="fa-solid fa-check"></i> Special offers and promotions <br/>
                        Join now to start earning points, reach new levels and unlock more rewards and benefits from adiClub.
                    </div>
                </div>

                <div id="right-mdl">
                    <div className="rm-img">
                        <img src="https://account-frontends.adidas.com/account_account-portal/1.0.0-experimental.14/assets/adiclub-blue-desktop.e34c412f9253e8d5.svg" alt=""/>
                        <div className="rm-heading">
                            <h2>YOUR ADICLUB BENEFITS AWAIT</h2> <br/>
                            <span className="rm-text">
                                <p>Get free shipping, discount vouchers and members only products when you’re in <br/> adiClub.</p><br/>
                                <b> Log in or sign up (it’s free) </b>
                            </span>
                        </div>
                        <div id="rm-icons">
                            <div className="hw-icons"> <i className="fa-brands fa-apple "></i> </div>
                            <div className="hw-icons"> <i className="fa-brands fa-facebook "></i></div>
                            <div className="hw-icons"> <i className="fa-brands fa-google"></i></div>
                        </div>
                        <div id="rm-email">
                            <input type="email" name="Email" id="email-box" placeholder="EMAIL ADDRESS *"/>
                            <span className="email-text">
                                <p>Please enter a valid e-mail address</p>
                            </span>
                        </div>
                        <div className="rm-box">
                            <div className="rm-box1">
                                <input type="checkbox" className="cb"/>
                            </div>
                            <div className="box1-text">
                                <p>I would like to stay up to date with adidas. I agree to receive personalised marketing messages from adidas India Marketing Pvt. Ltd. <br/>
                                <p> <u>Read more </u></p>
                                </p>
                            </div>
                        </div>
                        <div className="rm-box">
                            <div className="rm-box2">
                                <input type="checkbox" className="cb"/>
                            </div>
                            <div className="box1-text">
                                <p>I have read and accepted the <u>Terms & Conditions </u>, the <u>adiClub Terms & Conditions </u> and the adidas <u>Privacy Policy </u>. *</p>
                            </div>
                        </div>
                        <div className="rm-box">
                            <div className="rm-box3">
                                <input type="checkbox" className="cb"/>
                            </div>
                            <div className="box1-text">
                                <p>Keep me logged in. Applies to all options.</p>
                            </div>
                        </div>
                        <button id="cont-button">
                            CONTINUE<i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="section-10">
                <div className="sec10-left">
                    <p> JOIN ADIDAS AND GET 15% OFF </p>
                </div>
                <div className="sec10-right">
                    <button className="sec10-btn">
                        SIGN UP FOR FREE <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            <div className="section-11">
                <div className="products">
                    <p> <b>PRODUCTS </b></p> <br/>
                    <p>Footwear</p>
                    <p>Accessories</p>
                    <p>Outlet – Sale</p>
                    <p>New Arrivals</p>
                    <p>Special Offer</p>
                    <p>Flat 50% Off!</p>
                </div>
                <div className="products">
                    <p> <b>SPORTS</b></p> <br/>
                    <p>Cricket</p>
                    <p>Running</p>
                    <p>Football</p>
                    <p>Gym/Training</p>
                    <p>Tennis</p>
                    <p>Outdoor</p>
                    <p>Basketball</p>
                    <p>Swimming</p>
                    <p>Skateboarding</p>
                </div>
                <div className="products">
                    <p> <b>COLLECTIONS </b></p> <br/>
                    <p>Ultraboost</p>
                    <p>Superstar</p>
                    <p>NMD</p>
                    <p>Stan Smith</p>
                    <p>Sustainability</p>
                    <p>Predator</p>
                    <p>Parley</p>
                    <p>adicolor</p>
                </div>
                <div className="products">
                    <p><b>SUPPORT</b></p> <br/>
                    <p>Help</p>
                    <p>Customer Services</p>
                    <p>Returns & Exchanges</p>
                    <p>Shipping</p>
                    <p>Order Tracker</p>
                    <p>Store Locator</p>
                    <p>Bra Fit Guide</p>
                    <p>Terms and conditions</p>
                </div>
                <div className="products">
                    <p> <b>COMPANY INFO </b></p> <br/>
                    <p>About Us</p>
                    <p>adidas stories</p>
                    <p>adidas Apps</p>
                    <p>Entity Details</p>
                    <p>Press</p>
                    <p>Careers</p>
                </div>
                <div className="follow-us">
                    <p> <b>Follow-Us </b></p> <br/>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>

            <div className="footer">
                <div className="footer-1">
                    <p>Privacy Policy | Terms and Conditions | Cookies</p>
                </div>
                <div className="footer-2">
                    <p>©2021 adidas India Marketing Pvt. Ltd</p>
                </div>
            </div>
        </div>
    );
}

export default Login;



