import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../context/Products';
import ProductDetails from './ProductDetails';

const ShowProducts = () => {
    const { products } = useContext(ProductContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        setFilteredProducts(products)
    }, [products])

    useEffect(() => {
        const data = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilteredProducts(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm])

    return (
        <main>
            <div className="search_bar_div">
                <div className="search_lbl">Search</div>
                <input
                    className="search_bar"
                    type="text"
                    placeholder="search products .."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>

            <h1 className="products_header_home">Products List</h1>

            <div className="products">
                {
                    filteredProducts
                        .map(product => {
                            return (
                                <div className="product" key={product.id}>
                                    <h1 className="product_head">{product.name}</h1>
                                    <div className="product_description">
                                        <ProductDetails title="Manufacture Year" info={product.year}/>
                                        <ProductDetails title="Brand" info={product.brand} />
                                        <ProductDetails title="Memory" info={product.memory} />
                                        <ProductDetails title="Price" info={product.price} />
                                    </div>
                                    <img src={product.image} alt={product.name} />
                                </div>
                            );
                        })
                }
            </div>

        </main>
    );
};

export default ShowProducts;
