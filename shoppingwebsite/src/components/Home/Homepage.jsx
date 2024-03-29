import React from 'react';
import './Homepage.css'; 
import adidasImage1 from '../../Adidas-Pictures/1.png';
import adidasImage2 from '../../Adidas-Pictures/2.avif';
import adidasImage3 from '../../Adidas-Pictures/3.avif';
import adidasImage4 from '../../Adidas-Pictures/4.avif';
import adidasImage5 from '../../Adidas-Pictures/5.avif';
import adidasImage6 from '../../Adidas-Pictures/6.avif';
import adidasImage7 from '../../Adidas-Pictures/7.avif';
import adidasImage8 from '../../Adidas-Pictures/8.avif';
import adidasImage9 from '../../Adidas-Pictures/9.avif';
import adidasImage10 from '../../Adidas-Pictures/10.avif';
import adidasImage11 from '../../Adidas-Pictures/11.avif';
// import adidasImage12 from '../../Adidas-Pictures/12.avif';
import adidasImage13 from '../../Adidas-Pictures/13.avif';





function Homepage() {
    return (
        <div>
            <div class="header">
                <div class="hd1 flex">
                    <div>
                        <p> FREE DELIVERY, RETURN & EXCHANGE </p>
                    </div>
                    <div class="icon-down">
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <div class="hd2">
                    <p>help</p>
                    <p>orders and returns</p>
                    <p>sign up</p>
                    <a href="login.html">
                        <p>log in</p>
                    </a>
                </div>
                <div class="hd3">
                    <div class="logo">
                    <a href="Adidas.html"><img src={adidasImage1} alt="" /></a>

                    </div>
                    <div class="categories ">
                        <div class="cts">
                            <a href="men.html">
                                <p> <b>MEN </b></p>
                            </a>
                        </div>
                        <div class="cts">
                            <a href="women.html">
                                <p> <b>WOMEN </b></p>
                            </a>
                        </div>
                        <div class="cts">
                            <a href="kids.html">
                                <p> <b>KIDS </b></p>
                            </a>
                        </div>
                        <div class="cts">
                            <p>SPORTS</p>
                        </div>
                        <div class="cts">
                            <p>BR/ANDS</p>
                        </div>
                        <div class="cts">
                            <p>LIFESTYLE</p>
                        </div>
                        <div class="cts red-clr">
                            <p>OUTLETS</p>
                        </div>
                    </div>
                    <div class="search-box">
                        <input type="text" class="search-bar" placeholder="Search " />
                        <button class="btn">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <div class="options-3">
                        <div class="profile">
                            <a href="profile.html"> <i class="fa-regular fa-user"></i> </a>
                        </div>
                        <div class="heart">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                        <div class="cart">
                            <a href="Cart.html"> <i class="fa-solid fa-bag-shopping"></i> </a>
                        </div>
                    </div>
                </div>
                <div class="hd4">
                    <div class="hd4-text">
                        <p>ADIDAS: THE BR/AND WITH THE 3-STRIPES</p>
                    </div>
                    <div class="hd4-icon">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </div>
            <div class="mdl-body">
                <div class="img-2">
                    <img class="img2" src={adidasImage2} alt="" />
                
                    <div class="img2-text">
                        <div class="img2-text1 ">
                            <p>YOU GOT THIS </p>
                        </div>
                        <div class="img2-text2">
                            <p> When you play sport on your own terms,<br /> pressure doesn't stand a chance.
                            </p> <br /> <br />
                            <button class="img2-btn">
                                EXPLORE MORE <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="img-3">
                    <img src={adidasImage3} alt="" />
                    <div class="img3-text">
                        <div class="img3-text1">
                            <p>EXTRA 20% OFF*</p>
                        </div>
                        <div class="img3-text2">
                            <p> Buy 2 or More Products</p>
                            <br />
                            <button class="img3-btn ">
                                SHOP MEN <i class="fa-solid fa-arrow-right"></i>
                            </button>
                            <button class="img3-btn">
                                SHOP WOMEN <i class="fa-solid fa-arrow-right"></i>
                            </button>
                            <button class="img3-btn">
                                SHOP KIDS <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="sec-4">
                    <div class="row-1">
                        <p>Popular right now</p>
                    </div>
                    <div class="row-2">
                        <div class="row2-c1 ">
                            <p>samba</p>
                        </div>
                        <div class="row2-c2">
                            <p>running shoes <br /> men
                            </p>
                        </div>
                        <div class="row2-c3">
                            <p>nmd</p>
                        </div>
                    </div>
                    <div class="row-3">
                        <div class="row3-c1">
                            <p>backpack</p>
                        </div>
                        <div class="row3-c2">
                            <p>rmen sandals</p>
                        </div>
                        <div class="row3-c3">
                            <p>bag</p>
                        </div>
                    </div>
                </div>
                <div class="sec-5">
                    <div class="sec5-btn">
                        <button class="sec5-btn1">New arrivals</button>
                        <button class="sec5-btn2">Best of adidas</button>
                    </div>
                </div>
                <div class="sec-6">
                    <div class="sec6-sample1"><img src={adidasImage4} alt="" />
                        <p>&#x20B9; 4000</p>
                        <p>Stan Smith x Bape Shoes</p> <br />
                        <p class="grey-clr">Shoes</p>
                    </div>
                    <div class="sec6-sample1"><img src={adidasImage5} alt="" />
                        <p>&#x20B9; 8560</p>
                        <p>Adifom Adilette Sandals</p> <br />
                        <p class="grey-clr">Shoes</p>
                    </div>
                    <div class="sec6-sample1"><img src={adidasImage6} alt="" />
                        <p>&#x20B9; 8500</p>
                        <p>Adifom Adilette Sandals</p> <br />
                        <p class="grey-clr">Shoes</p>
                    </div>
                    <div class="sec6-sample1"><img src={adidasImage7} alt="" />
                        <p>&#x20B9; 8000</p>
                        <p>Crazy Iiinfinity Shoes</p> <br />
                        <p class="grey-clr">Shoes</p>
                    </div>
                    <div class="sec6-sample1"><img src={adidasImage8} alt="" />
                        <p>&#x20B9; 8400</p>
                        <p>Niteball Shoes</p> <br />
                        <p class="grey-clr">Shoes</p>
                    </div>
                </div>
                <div class="section-7">
                    <p>WHAT'S HOT</p>
                </div>
                <div class="section-8">
                    <div class="sec8-sample1"><img src={adidasImage13} alt="" />
                        <p> MAN UTD x STONE ROSES <br />
                            Manchester's youth and euphoria. <br />
                            <br />
                            <a href="">SHOP NOW</a>
                        </p>
                    </div>
                    <div class="sec8-sample1"><img src={adidasImage9} alt="" />
                        <p> adidas Originals x BAPE® <br />
                            adidas Stan Smith BAPE®. <br />
                            <br />
                            <a href="">SHOP NOW</a>
                        </p>
                    </div>
                    <div class="sec8-sample1"><img src={adidasImage10} alt="" />
                        <p>Check the Miami Jersey <br />
                            adidas Stan Smith BAPE®. <br />
                            <br />
                            <a href="">SHOP NOW</a>
                        </p>
                    </div>
                    <div class="sec8-sample1"><img src={adidasImage11} alt="" />
                        <p>AE 1 New Wave <br />
                            adidas Stan Smith BAPE®. <br />
                            <br />
                            <a href="">SHOP NOW</a>
                        </p>
                    </div>
                </div>
                <div class="section-9">
                    <div class="sec9-left">
                        <p> <b>STORIES, STYLES AND SPORTSWEAR AT <br />
                            ADIDAS, SINCE 1949 </b> <br /> <br />
                            Sport keeps us fit. Keeps you mindful. Br/ings us together. Through sport we have <br />
                            the power to change lives. Whether it is through stories of inspiring athletes.<br />
                            Helping you to get up and get moving.Sportswear featuring the latest<br />
                            technologies, to up your performance. Beat your PB. adidas offers home to the<br />
                            runner, the basketball player, the soccer kid, the fitness enthusiast. The weekend<br />
                            hiker that loves to escape the city. The yoga teacher that spreads the moves.<br />
                            The 3-Stripes are seen in the music scene. On stage, at festivals. Our sports clothing<br />
                            keeps you focused before that whistle blows. During the race. And at the finish<br />
                            lines. We’re here to support creators. Improve their game.Their lives. And change<br />
                            the world.<br /><br />

                            adidas is about more than sportswear and workout clothes. We partner with the<br />
                            best in the industry to co-create. This way we offer our fans the sports apparel<br />
                            and style that match their athletic needs, while keeping sustainability in mind.<br />
                            We’re here to support creators. Improve their game.Create change. And we think<br />
                            about the impact we have on our world.</p>
                    </div>
                    <div class="sec9-right">
                        <p> <b> WORKOUT CLOTHES, FOR ANY SPORT </b> <br /> <br />
                            adidas designs for and with athletes of all kinds. Creators, who love to change the<br />
                            game. Challenge conventions. Br/eak the rules and define new ones. Then br/eak<br />
                            them again. We supply teams and individuals with athletic clothing pre-match. To<br />
                            stay focussed. We design sports apparel that get you to the finish line. To win the<br />
                            match. We support women, with br/as and tights made for purpose. From low to<br />
                            high support. Maximum comfort. We design, innovate and itterate. Testing new<br />
                            technologies in action. On the pitch, the tracks, the court, the pool. Retro workout<br />
                            clothes inspire new streetwear essentials. Like NMD, Ozweego and our Firebird<br />
                            tracksuits. Classic sports models are br/ought back to life. Like Stan Smith. And<br />
                            Superstar. Now seen on the streets and the stages.<br /><br />

                            Through our collections we blur the borders between high fashion and high<br />
                            performance. Like our adidas by Stella McCartney athletic clothing collection –<br />
                            designed to look the part inside and outside of the gym. Or some of our adidas<br />
                            Originals lifestyle pieces, that can be worn as sportswear too. Our lives are<br />
                            constantly changing. Becoming more and more versatile. And adidas designs with that in mind. <br />
                        </p>
                    </div>
                </div>
                <div class="section-10">
                    <div class="sec10-left">
                        <p> JOIN ADIDAS AND GET 15% OFF </p>
                    </div>
                    <div class="sec10-right">
                        <button class="sec10-btn">
                            SIGN UP FOR FREE <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <div class="section-11">
                    <div class="products">
                        <p> <b>PRODUCTS </b></p> <br />
                        <p>Footwear</p>
                        <p>Accessories</p>
                        <p>Outlet – Sale</p>
                        <p>New Arrivals</p>
                        <p>Special Offer</p>
                        <p>Flat 50% Off!</p>
                    </div>
                    <div class="products">
                        <p> <b>SPORTS</b></p> <br />
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
                    <div class="products">
                        <p> <b>COLLECTIONS </b></p> <br />
                        <p>Ultraboost</p>
                        <p>Superstar</p>
                        <p>NMD</p>
                        <p>Stan Smith</p>
                        <p>Sustainability</p>
                        <p>Predator</p>
                        <p>Parley</p>
                        <p>adicolor</p>
                    </div>
                    <div class="products">
                        <p><b>SUPPORT</b></p> <br />
                        <p>Help</p>
                        <p>Customer Services</p>
                        <p>Returns & Exchanges</p>
                        <p>Shipping</p>
                        <p>Order Tracker</p>
                        <p>Store Locator</p>
                        <p>Br/a Fit Guide</p>
                        <p>Terms and conditions</p>
                    </div>
                    <div class="products">
                        <p> <b>COMPANY INFO </b></p> <br />
                        <p>About Us</p>
                        <p>adidas stories</p>
                        <p>adidas Apps</p>
                        <p>Entity Details</p>
                        <p>Press</p>
                        <p>Careers</p>
                    </div>
                    <div class="follow-us">
                        <p> <b>Follow-Us </b></p> <br />
                        <i class="fa-br/ands fa-instagram"></i>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="footer-1">
                    <p>Privacy Policy | Terms and Conditions | Cookies</p>
                </div>
                <div class="footer-2">
                    <p>©2021 adidas India Marketing Pvt. Ltd</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage;

