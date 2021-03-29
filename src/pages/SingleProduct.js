import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Header from '../components/Header'
import ProductDetails from '../components/ProductDetails'
import { ProductContext } from '../context/Products'

const SingleProduct = () => {
    const { selectedProduct, getProductByID } = React.useContext(ProductContext)
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const prod = getProductByID(selectedProduct)
        setProduct(prod)
        setLoading(false)
    }, [getProductByID, selectedProduct])


    if(loading){
        return <h2>loading ...</h2>
    }
    if(!loading && !product){
        return <Redirect to="/" />
    }

    return (
        <main className="products">
            <Header title="Product Detail" />
            <div className="product">
                <h1 className="product_head">{product.name}</h1>
                <div className="product_description">
                    <ProductDetails title="Manufacture Year" info={product.year} />
                    <ProductDetails title="Brand" info={product.brand} />
                    <ProductDetails title="Memory" info={product.memory} />
                    <ProductDetails title="Price" info={product.price} />
                </div>
                <img src={product.image} alt={product.name} />
            </div>
        </main>
    );
}

export default SingleProduct
