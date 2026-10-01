import React from "react";
import products from "../../data/products";
import ProductCard from "./ProductCard";
import { useState } from "react";

const Menu =() =>{
    return (
        <section id="menu" className="menu-section">
        <section className="menu-section1">

        {/*Left Side*/}
        <div className="menu-left">

            <p className="small-heading">
                OUR COLLECTION_____
            </p>

            <h1>
                EXPLORE <br/>
                OUR MENU
            </h1>

            <p className="description">
                Discover the latest styles,
                iconic classic and everyday essentials.
            </p>

            <div className="categorybtn">
                <button>ALL</button>
                <button>Men</button>
                <button>Women</button>
                <button>Kids</button>

            </div>
        </div>

        {/*Right Side*/}
        <div className="menu-right">

            {products.map((product)=>(
                <ProductCard
                   key={product.id}
                   product={product}/>
            ))}
        </div>
    </section>


        {/*Menu section 2*/}
           <section className="menu-section2">
            {/*Left Side*/}

            <div className="menu2-left">
            <img src="images/brand_logo2.png" className="menu-logo"/>
            <p className="small-heading2">
                SHOP NOW
            </p>

            <h1>
                PREMIUM <br/>
                SNEAKERS
            </h1>

            <p className="description2">
                High quality.Iconic designs.Built for every journey.
            </p>
        </div>

        {/*Right Side*/}
        <div className="menu2-right">
    <div className="category-menu2">
    <button className="category-btn2">All</button>
    <button className="category-btn2">Men</button>
    <button className="category-btn2">Women</button>
    <button className="category-btn2">Kids</button>
    <button className="category-btn2">New Arrivals</button>
    <button className="category-btn2">Best Sellers</button>
</div>

  <div className="menu2-products">

            {products.slice(0,3).map((product)=>(
                <ProductCard
                   key={product.id}
                   product={product}/>
            ))}


        </div>
            <img src="images/menusecn2.png" className="menusecn2"/>
        </div>
    </section>

{/*video promo section */}
     <section className="video-section">
            <video autoPlay muted loop playsInline className="promo-video">

                <source src="/images/nike-promo.mp4" type="video/mp4"/>
            </video>

            <div className="overlay"></div>

            <div className="video-content">
                <h1>Elevate Your Pre-Programme Routine</h1>

                <p>
                    Nike 24.7 Collection is tailored for the moments before competition.
                </p>

                <div className="video-buttons">
                    <button className="shop-btn">Shop</button>
                    <button className="watch-btn">Watch▶</button>
                </div>
            </div>
        </section>

        {/*Featured section */}
    <section className="featured-section">
        <div>
            <h2 className="featured-title">Featured</h2>
            <img src="images/featuredsection.png" />
            <img src="images/featuredsection2.png" />
        </div>
    </section>

        <section className="trending-section">
            <div>

            <h2 className="trending-title">trending</h2>
            <img src="images/trendingsection1.png"/>
            <img src="images/trendingsection2.png"/>
            <img src="images/trendingsection3.png"/>
        </div>
    </section>
  </section>
    );
};

export default Menu;