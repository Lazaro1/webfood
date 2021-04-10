import './style.css'
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';
import { useState } from 'react';


function Order(product) {

    const [zipCode, setZipCode]   = useState('');
    const [district, setDistrict] = useState('');
    const [street, setStreet]     = useState('');
    const [number, setNumber]     = useState('');


    const price = product.product.price
    const name = product.product.name 
    function handleSubmitWpp(){
        var  WthUrl = `http://api.whatsapp.com/send?phone=5538991292333&text= Endereço: Bairro:${district} Rua: ${street} Número:${number} Produto: ${name}, Preço: ${price}`
        window.open(WthUrl)
        console.log(WthUrl)
    }

    return(
        <div className="order-container">
            <form>
                <label>CEP {zipCode} </label>
                <input type='text' placeholder='CEP' onChange={(e) => setZipCode(e.target.value)} />
                <label>Bairro</label>
                <input type='text' placeholder='Bairro' onChange={(e) => setDistrict(e.target.value)} />
                <label>Rua</label>
                <input type='text' placeholder='Endereço' onChange={(e) => setStreet(e.target.value)} />
                <label>Número</label>
                <input type='text' placeholder='Número' onChange={(e) => setNumber(e.target.value)} />
                <div className="order-button">
                    <ButtonToolbar>
                        <ButtonGroup size="lg">
                            <Button color="green" onClick={handleSubmitWpp}>Confirmar entrega</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </div>
            </form>
        </div>
    )
}


export default Order;


