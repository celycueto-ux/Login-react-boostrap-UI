import React, { useState, useEffect } from 'react';
import './login.css';



export const Login = () => {


    const [formState, setFormState] = useState(
        {

            correo: '',
            password: ''
        }
    );
    const { correo, password } = formState;

    const handleInputChange = ({ target }) => {

        setFormState(
            {
                ...formState,
                [target.name]: target.value

            }
        );

    }
    return (

        <div >
            <div className="jumbotron" >
                <h1 className="display-3" className="texto" >Inicio de sesión</h1>
                <hr />

                <div className="form-group">
                    Correo
                    <input type="text"
                        name="correo"
                        className="form-control"
                        placeholder="Tu correo"
                        autoComplete="off"
                        value={correo}
                        onChange={handleInputChange}
                    />
                    <hr />
                    Contraseña
                <input type="password"
                        name="password"
                        className="form-control"
                        placeholder="Tu contraseña"
                        autoComplete="off"
                        value={password}
                        onChange={handleInputChange}
                    />



                </div>
                <div>
                    <button type="button" className="btn btn-secondary"
                    >Iniciar sesión</button>
                </div>
            </div>

        </div >
    );
}


export default Login;