import React, { useState, useContext } from 'react';
import { ProductContext } from '../context/Products';
import InputTitle from '../components/InputTitle'
import Input from '../components/Input';
import InputContainer from '../components/InputContainer';

const AddProduct = () => {
    const { addProduct } = useContext(ProductContext);
    
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [brand, setBrand] = useState('');
    const [memory, setMemory] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const submitHandle = (e)=>{
        e.preventDefault();
        console.log({ name, year, brand, memory, price, image });
        // validation
        // alert
        addProduct({ name, year, brand, memory, price, image })
        setName('')
        setYear('')
        setBrand('')
        setMemory('')
        setPrice('')
        setImage('')
    }

    return (
        <div>
            <h1 className="add_product_page_header">Add Product</h1>

            <form onSubmit={submitHandle} className="add_product_form">
                <InputContainer>
                    <InputTitle title="Product Name" />
                    <Input
                        type="text"
                        name="name"
                        setInput={setName}
                        required={true}
                        InputValue={name}
                        placeholder="Samsung S6"
                    />
                </InputContainer>
                
                <InputContainer>
                    <InputTitle title="Manufacture year" />
                    <Input
                        type="text"
                        name="year"
                        setInput={setYear}
                        required={true}
                        InputValue={year}
                        placeholder="2021"
                    />
                </InputContainer>
                
                <InputContainer>
                    <InputTitle title="Brand" />
                    <Input
                        type="text"
                        name="brand"
                        setInput={setBrand}
                        required={true}
                        InputValue={brand}
                    />
                </InputContainer>
                
                <InputContainer>
                    <InputTitle title="Memory" />
                    <Input
                        type="text"
                        name="memory"
                        setInput={setMemory}
                        required={true}
                        InputValue={memory}
                    />
                </InputContainer>
                
                <InputContainer>
                    <InputTitle title="Product Price" />
                    <Input
                        type="text"
                        name="price"
                        setInput={setPrice}
                        required={true}
                        InputValue={price}
                    />
                </InputContainer>
                
                <InputContainer>
                    <Input
                        styleInput="fileInput"
                        type="file"
                        name="image"
                        setInput={setImage}
                        required={true}
                        InputValue={image}
                    />
                </InputContainer>
                
                <button className="add_product_form_btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
