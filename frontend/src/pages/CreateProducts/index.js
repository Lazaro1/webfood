import './style.css'
import { Button, ButtonGroup, ButtonToolbar } from 'rsuite';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

function Products() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [url, setUrl] = useState('');

    const createProducts = async (e) => {

        if (name === '' || description === '' || price === '' || url === '' ) {       
            alert('Usuário e Senha incorretos')
            return
        } 
        try {
            const { data } = await api.post('/products/createproducts', { name, description, price, url })
            console.log(data)

            if (data.error) {
                alert('Houve um erro: ' + data.result)
                return
            }

            if (data.result) {
                history.push('/')
            } else {
                alert('Erro ao inserir Produto')
            }

            console.log(data)

        } catch (error) {
            alert('Houve um erro: ' + error.message)
        }

    }



    return (
        <div className="products-container">
            <h1> Insira um novo produto</h1>
            <form>
                <div className="login-input">
                    <label>Nome</label>
                    <input type='text' placeholder='Nome' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="login-input">
                    <label>Descrição</label>
                    <input type='text' placeholder='Descrição' onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="login-input">
                    <label>Preço</label>
                    <input type='text' placeholder='Preço' onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="login-input">
                    <label>URL</label>
                    <input type='text' placeholder='URL' onChange={(e) => setUrl(e.target.value)} />
                </div>




                <div className="order-button">
                    <ButtonToolbar>
                        <ButtonGroup size="lg">
                            <Button color="green" onClick={createProducts}>Adicionar Produto</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </div>
            </form>
        </div>
    )
}


export default Products;