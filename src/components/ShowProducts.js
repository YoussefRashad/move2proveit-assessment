import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../context/Products';
import SingleProduct from './SingleProduct';
import GridProducts from './GridProducts'
import Header from './Header';

const ShowProducts = () => {
    const { products, setFilteredProducts } = useContext(ProductContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [brandSearch, setBrandSearch] = useState('sony')

    useEffect(() => {
        setFilteredProducts(products)
    }, [products, setFilteredProducts])

    useEffect(() => {
        const data = products.filter(product => product.model.toLowerCase().includes(searchTerm.toLowerCase()) && product.brand === brandSearch)
        setFilteredProducts(searchTerm ? data : products)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm])

    return (
        <main>
            <Header title="Products List" />

            <form className="searchForm">
                <div className="search_lbl">Search</div>
                <input
                    className="search_bar"
                    type="text"
                    placeholder="search products .."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <select
                    style={{marginLeft: 10}}
                    id="brandSearch"
                    value={brandSearch}
                    onChange={(e)=> setBrandSearch(e.target.value)}
                >
                    <option hidden>Choose from the brand...</option>
                    <option value='sony'>Sony</option>
                    <option value='samsung'>Samsung</option>
                    <option value='apple'>Apple</option>
                    <option value='nokia'>Nokia</option>
                    <option value='lg'>LG</option>
                </select>
            </form>

            <GridProducts />

            <SingleProduct />
            
        </main>
    );
};

export default ShowProducts;
