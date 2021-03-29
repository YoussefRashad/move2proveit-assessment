import React from 'react'

const ProductDetails = ({ title, info }) => {
    return (
        <div className="product_description_li">
            <div className="product_lbl">{title}:</div>
            <div className="li_data">{info}</div>
        </div>
    )
}

export default ProductDetails
