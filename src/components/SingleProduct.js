import React, { useState, useEffect } from 'react'
import Header from './Header'
import ProductDetails from './ProductDetails'
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
        console.log(prod);
    }, [getProductByID, selectedProduct])


    if(loading){
        return <h2>loading ...</h2>
    }
    if(!loading && !product){
        return ""
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
                    <ProductDetails title="Dual SIM" info={product.dualSIM ? 'true' : 'false'} />
                    <ProductDetails title="NFC" info={product.nfc ? 'true' : 'false'} />
                    <ProductDetails title="4G" info={product.fourG ? 'true' : 'false'} />
                </div>
            </div>
        </main>
    );
}

export default SingleProduct
