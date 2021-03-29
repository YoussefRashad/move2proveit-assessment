import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../context/Products';
import GridProducts from './GridProducts'
import Header from './Header';

const ShowProducts = () => {
    const { products, setFilteredProducts } = useContext(ProductContext);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setFilteredProducts(products)
    }, [products, setFilteredProducts])

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

            <Header title="Products List" />
            <GridProducts />
            
        </main>
    );
};

export default ShowProducts;
