import React, { useState, useContext } from 'react';
import { ProductContext } from '../context/Products';
import InputTitle from '../components/InputTitle'
import Input from '../components/Input';
import InputContainer from '../components/InputContainer';
import { useHistory } from 'react-router-dom';

const AddProduct = () => {
    const { addProduct } = useContext(ProductContext);
    const history = useHistory()
    
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [brand, setBrand] = useState('sony');
    const [memory, setMemory] = useState('16GB');
    const [dualSIM, setDualSIM] = useState(false)
    const [nfc, setNfc] = useState(false)
    const [fourG, setFourG] = useState(false)
    const [screen4, setScreen4] = useState(false)
    const [screen5, setScreen5] = useState(false)
    const [screen6, setScreen6] = useState(false)
    const [colorWhite, setColorWhite] = useState(false)
    const [colorBlack, setColorBlack] = useState(false)
    const [colorGold, setColorGold] = useState(false)
    const [alert, setAlert] = useState({
        show: false,
        msg: ''
    })

    const submitHandle = (e)=>{
        e.preventDefault();
        console.log({ model, year, brand, memory, dualSIM, nfc, fourG });
        // validation
        if(!model || !year || !brand || !memory){
            // alert
            setAlert({ show: true, msg: "you should entered all required data .."})
        }else if (brand) {
            
        }
        else{
            addProduct({ model, year, brand, memory, dualSIM, nfc, fourG })
            history.push('/')
        }
    }

    return (
        <div>
            <h1 className="add_product_page_header">Add Product</h1>
            <form onSubmit={submitHandle} className="add_product_form">
                <InputContainer>
                    <InputTitle title="Model" />
                    <Input
                        type="text"
                        name="name"
                        setInput={setModel}
                        required={true}
                        InputValue={model}
                        placeholder="Samsung S6"
                    />
                </InputContainer>
                
                <InputContainer>
                    <InputTitle title="Manufacture year" />
                    <input
                        className={" add_product_form_input"}
                        type="text"
                        name="year"
                        value={year}
                        autoComplete={false}
                        onChange={e =>{
                            let value = e.target.value
                            if (value>'9' || value<'0') {
                                setAlert({
                                    show: true,
                                    msg: "you should entered a valid year .."
                                })
                            } else {
                                setAlert({
                                    show: false,
                                    msg: ""
                                })
                                setYear(e.target.value)
                            }
                        }
                        }
                        required
                        placeholder={2021}
                    />
                </InputContainer>
                
                <InputContainer>
                    <InputTitle title="Brand" />
                    <select
                        style={{ width: '98%', height: '30px' }}
                        id="brandSearch"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    >
                        <option value='sony'>Sony</option>
                        <option value='samsung'>Samsung</option>
                        <option value='apple'>Apple</option>
                        <option value='nokia'>Nokia</option>
                        <option value='lg'>LG</option>
                    </select>
                </InputContainer>
                
                <InputContainer>
                    <InputTitle title="Memory" />
                    <select
                        style={{ width: '98%', height: '30px' }}
                        id="brandSearch"
                        value={memory}
                        onChange={(e) => setMemory(e.target.value)}
                    >
                        <option value='16GB'>16GB</option>
                        <option value='32GB'>32GB</option>
                        <option value='64GB'>64GB</option>
                        <option value='128GB'>128GB</option>
                    </select>
                </InputContainer>
                
                <InputContainer>
                    <InputTitle title="Options" />
                    <span>
                        <label>Dual SIM</label>
                        <input
                            type="checkbox"
                            name="Dual SIM"
                            onChange={()=> setDualSIM(!dualSIM)}
                            checked={dualSIM}
                        />
                    </span>

                    <span style={{ marginLeft: '50px' }}>
                        <label>NFC</label>
                        <input
                            type="checkbox"
                            name="NFC"
                            onChange={()=> setNfc(!nfc)}
                            checked={nfc}
                        />
                    </span>

                    <span style={{ marginLeft: '50px' }}>
                        <label>4G</label>
                        <input
                            type="checkbox"
                            name="4G"
                            onChange={()=> setFourG(!fourG)}
                            checked={fourG}
                        />
                    </span>
                </InputContainer>

                <InputContainer>
                    <InputTitle title="Screen" />
                    <fieldset id="screen">
                        <span>
                            <label>4"</label>
                            <input
                                type="radio"
                                onChange={() => setScreen4(!screen4)}
                                value={screen4}
                                name="screen"
                            />
                        </span>
                        <span style={{ marginLeft: '100px' }}>
                            <label>5"</label>
                            <input
                                type="radio"
                                name="screen"
                                onChange={() => setScreen5(!screen5)}
                                value={screen5}
                            />
                        </span>
                        <span style={{ marginLeft: '60px' }}>
                            <label>6"</label>
                            <input
                                type="radio"
                                name="screen"
                                onChange={() => setScreen6(!screen6)}
                                value={screen6}
                            />
                        </span>
                    </fieldset>
                </InputContainer>

                <InputContainer>
                    <InputTitle title="Color" />
                    <fieldset id="color">
                        <span>
                            <label>white</label>
                            <input
                                type="radio"
                                name="color"
                                onChange={() =>{
                                    if(!colorBlack && !colorGold){
                                        setColorWhite(true)
                                    }else{
                                        setColorWhite(false) 
                                    }
                                }}
                                value={colorWhite}
                            />
                        </span>
                        <span style={{ marginLeft: '70px' }}>
                            <label>black</label>
                            <input
                                type="radio"
                                name="color"
                                onChange={() =>{
                                    if (!colorWhite && !colorGold) {
                                        setColorBlack(true)
                                    } else {
                                        setColorBlack(false)
                                    }
                                }}
                                value={colorBlack}
                            />
                        </span>
                        <span style={{ marginLeft: '40px' }}>
                            <label>gold</label>
                            <input
                                type="radio"
                                name="color"
                                onChange={() => {
                                    if (!colorWhite && !colorBlack) {
                                        setColorGold(true)
                                    } else {
                                        setColorGold(false)
                                    }
                                }}
                                value={colorGold}
                            />
                        </span>
                    </fieldset>
                </InputContainer>
                
                {/* alert msg for empty field */}
                {alert.show && <h5 style={{color: 'red'}}>{alert.msg}</h5>}
                <button className="add_product_form_btn" type="submit">
                    Submit
                </button>
                <button className="add_product_form_btn" onClick={()=> history.push('/')}>
                    Back
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
