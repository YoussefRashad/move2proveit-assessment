import React, { useState, useEffect } from 'react'
import { productsJson } from '../json/db.json';
export const ProductContext = React.createContext()

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(productsJson)
    }, [])

    const addProduct = (product)=> setProducts([...products, product])
    
    
    return (
        <ProductContext.Provider value={{ 
            products,
            addProduct
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;