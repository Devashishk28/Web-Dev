import React from "react";

const ProductCard =({product}) =>{
    return(
        <div className ="product-card">

            {product.isNew && (
                <span className="new-badge">NEW</span>
            )}

            <img 
            src={product.image}
            alt={product.name}
            className="product-image"/>

            <h3>{product.name}</h3>

            <p>{product.category}</p>

            <div className="card-footer">
                <span>${product.price}</span>

                <button>+</button>
            </div>
        </div>
    );
};

export default ProductCard;