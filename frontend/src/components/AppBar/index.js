import { Link } from 'react-router-dom'

import './style.css'

function AppBar() {
    return (
        <div className="appbar-container">
            <Link className="logo-container" to="/webfood">WEBFOOD</Link>

            <div className="nav-container">
                <div className="addproduct-container">
                    <Link className="category-item" to="/Produtos" >Adicionar Produtos</Link>
                </div>
                <div className="category-container">
                    <Link className="category-item" to="/webfood">Produtos</Link>
                    <Link className="category-item" to="Login">Login</Link>
                </div>
            </div>
        </div>

    )
}

export default AppBar;