import React, { useState, useEffect } from 'react'
import { productsJson } from '../json/db.json';
export const ProductContext = React.createContext()

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState()

    useEffect(() => {
        setProducts(productsJson)
        setFilteredProducts(products => [...products])
    }, [])

    const addProduct = (product)=> setProducts([...products, product])

    const getProductByID = (ID) => products.find(prod => prod.id === ID)
    
    return (
        <ProductContext.Provider value={{ 
            products,
            filteredProducts,
            selectedProduct,
            setFilteredProducts,
            addProduct,
            setSelectedProduct,
            getProductByID
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;