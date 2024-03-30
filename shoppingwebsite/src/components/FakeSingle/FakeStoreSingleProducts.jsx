import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import adidasImage1 from '../../Adidas-Pictures/1.png';

const FakeStoreSingleProducts = () => {
    const [productData, setProductData] = useState({})
    const { id } = useParams()

    async function getSingleProductData() {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProductData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (id) {
            getSingleProductData();
        }
    }, [id])

    // Function to convert price to INR
    const convertPriceToINR = (price) => {
        // Assuming the API provides price in USD, convert it to INR
        const priceInINR = price * 74.5; // Convert USD to INR (assuming 1 USD = 74.5 INR)
        return priceInINR.toFixed(2); // Return the price rounded to 2 decimal places
    };

    return (
        <div>
            <div className="header">
                <div className="hd1 flex">
                    <div>
                        <p>FREE DELIVERY, RETURN & EXCHANGE</p>
                    </div>
                    <div className="icon-down">
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <div className="hd2">
                    <p>help</p>
                    <p>orders and returns</p>
                    <p>sign up</p>
                    <p>log in</p>
                </div>
                <div className="hd3">
                    <div className="logo">
                        <img src={adidasImage1} alt="" />
                    </div>
                    <div className="categories">
                        <div className="cts">
                            <a href="men.html">
                                <p><b>MEN</b></p>
                            </a>
                        </div>
                        <div className="cts">
                            <a href="women.html">
                                <p><b>WOMEN</b></p>
                            </a>
                        </div>
                        <div className="cts">
                            <a href="kids.html">
                                <p><b>KIDS</b></p>
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
                        <input type="text" className="search-bar" placeholder="Search " />
                        <button className="btn">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <div className="options-3">
                        <div className="profile">
                            <a href="profile.html"><i className="fa-regular fa-user"></i></a>
                        </div>
                        <div className="heart">
                            <i className="fa-regular fa-heart"></i>
                        </div>
                        <div className="cart">
                            <a href="Cart.html"><i className="fa-solid fa-bag-shopping"></i></a>
                        </div>
                    </div>
                </div>
                {/* <div className="hd4">
                    <div className="hd4-text">
                        <p>ADIDAS: THE BRAND WITH THE 3-STRIPES</p>
                    </div>
                    <div className="hd4-icon">
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div> */}
            </div>

            <img src={productData?.image} alt='image' style={{ height: '300px', width: '300px' }} /> {/* Specify height and width */}
            <h1>{productData?.title}</h1>
            <p><strong>Price:</strong> Rs {convertPriceToINR(productData?.price)}</p>

            <div className="footer" style={{ marginTop: '50px' }}>
                <div className="footer-1">
                    <p>Privacy Policy | Terms and Conditions | Cookies</p>
                </div>
                <div className="footer-2">
                    <p>©2021 adidas India Marketing Pvt. Ltd</p>
                </div>
            </div>

        </div>
    )
}

export default FakeStoreSingleProducts
