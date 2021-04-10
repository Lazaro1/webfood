import 'react-responsive-modal/styles.css';
import { useEffect, useState } from 'react';
import { Modal } from 'rsuite'

import './style.css'
import Order from '../../components/NewOrder';
import api from '../../services/api';

function Home() {

    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState([]);


    const [isRedy, setIsReady] = useState(false)

    useEffect(() => {
        getProducts();
    }, [])

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const getProducts = async () => {
        const result = await api.get('/products')
        setProducts(result.data)
        setIsReady(true)
    }

    if (!isRedy)
        return (<h1> Carregando ... </h1>)

    else
        return (
            <div className="home-container">
                <div className="tittle-container">
                    <h1>Produtos</h1>
                </div>
                <div className="products-container">
                    {products.map(product => {
                        return (
                            <div className="home-box">
                                <img src={product.url} alt="" />
                                <h1>{product.name}</h1>
                                <p>{product.description}</p>
                                <button onClick={onOpenModal} >Fazer Pedido</button>
                                <span>Preço R$ {product.price}</span>

                                <Modal show={open} onHide={onCloseModal} center>
                                    <Modal.Header>
                                        <Modal.Title classPrefix='modal-title'> Insira o endereço de Entrega </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Order product={product} />
                                    </Modal.Body>
                                </Modal>
                            </div>
                        )
                    })}

                </div>
            </div>

        )
}

export default Home;