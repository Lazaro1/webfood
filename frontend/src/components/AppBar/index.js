import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Button, ButtonGroup, ButtonToolbar, Modal } from 'rsuite';
import Products from '../../pages/CreateProducts';

import './style.css'

function AppBar() {

    const history = useHistory();

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div className="appbar-container">
            <Link className="logo-container" to="/">WEBFOOD</Link>

            <div className="nav-container">
                <div className="addproduct-container">
                    <Link className="category-item" to="/Produtos" >Adicionar Produtos</Link>
                </div>
                <div className="category-container">
                    <Link className="category-item" to="/">Produtos</Link>
                    <Link className="category-item" to="Login">Login</Link>
                </div>
            </div>
        </div>

    )
}

export default AppBar;