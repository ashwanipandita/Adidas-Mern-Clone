import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import adidasImage1 from '../../Adidas-Pictures/1.png';
import adidasImage2 from '../../Adidas-Pictures/2.avif';
import adidasImage3 from '../../Adidas-Pictures/3.avif';

const FakeStoreAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]); // to just get products 20 -> 20
  const [search, setSearch] = useState(""); // shoes
  const [filterProducts, setFilterProducts] = useState([]); // [{},{} ] setting here // 20 -> 10 4
  const router = useNavigate();

  async function getProducts() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      if (response?.data.length) {
        setAllProducts(response.data);
        setFilterProducts(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function redirect(id) {
    router(`/fake-single-product/${id}`);
  }

  function handleChange(event) {
    setSearch(event.target.value);
    let userWord = event.target.value.toLowerCase();
    const filteredProducts = allProducts.filter((product) => {
      return product.title.toLowerCase().includes(userWord);
    });
    setFilterProducts(filteredProducts);
  }

  useEffect(() => {
    getProducts();
  }, []);

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
            <input type="text" className="search-bar" placeholder="Search " value={search} onChange={handleChange} />
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
        <div className="hd4">
          <div className="hd4-text">
            <p>ADIDAS: THE BRAND WITH THE 3-STRIPES</p>
          </div>
          <div className="hd4-icon">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>

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



      {filterProducts?.length ? (
        <div style={{ marginTop: "10px",marginBottom:"50px", display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
          {filterProducts.map((productObj) => (
            <div key={productObj.id} onClick={() => redirect(productObj.id)} style={{ width: "18%", border: "2px solid black", height: "250px" }}>
              <img style={{ height: "70%", width: "100%" }} src={productObj.image} alt={productObj.title} />
              <p>{productObj.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <div class="footer">
                <div class="footer-1">
                    <p>Privacy Policy | Terms and Conditions | Cookies</p>
                </div>
                <div class="footer-2">
                    <p>©2021 adidas India Marketing Pvt. Ltd</p>
                </div>
            </div>
    </div>




  );
};

export default FakeStoreAllProducts;
