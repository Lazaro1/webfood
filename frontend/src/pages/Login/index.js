import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './style.css'

import api from '../../services/api'

function Login() {

    const history = useHistory();
    const [screenState, setScreenState] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const { data } = await api.post('/users/login', { email, password })

            if (data.error) {
                alert('Houve um erro: ' + data.result)
                return
            }

            if (data.result) {
                history.push('./')
            } else {
                alert('Usuário ou Senha Inválidos')
            }
        } catch (error) {
            alert('Houve um erro: ' + error.message)
        }
    }

    const handleCreateUser = async (e) => {
        e.preventDefault();
        try {
            if (name === '' || email === '' || password === '') {
                alert('Preencha todos os campos')
                return;
            }

            const serverResponse = await api.post('/users', { name, email, password })

            if (serverResponse.data === true) {
                history.push('/webfood')
            } else {
                alert(Error)
            }
        } catch (error) {
            alert('Houve um erro: ' + error.message)
        }
    }

    if (screenState) {
        return (
            <div className="login-container">
                <div className="login-section">
                    <h1>Entre com seu email e senha </h1>

                    <div className="login-form">
                        <form action="">
                            <div className="login-input">
                                <label >Email</label>
                                <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="login-input">
                                <label >Senha</label>
                                <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div className='login-btn'>
                                <button type="submit" onClick={e => handleLogin(e)} >Login</button>
                            </div>
                        </form>
                        <div className='login-link'>
                            <a href="#" onClick={() => setScreenState(false)}> Ainda não tenho uma conta </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="login-container">
                <div className="login-section">
                    <h1>Entre com seu email e senha </h1>

                    <div className="login-form">
                        <form action="">
                            <div className="login-input">
                                <label >Nome</label>
                                <input type="text" placeholder="Nome" onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="login-input">
                                <label >Email</label>
                                <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="login-input">
                                <label >Senha</label>
                                <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div className='login-btn'>
                                <button type="submit" onClick={e => handleCreateUser(e)} >Criar Conta</button>
                            </div>
                        </form>
                        <div className='login-link'>
                            <a href="#" onClick={() => setScreenState(true)}> Fazer Login </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Login;