import './Login.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function Login() {

    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [error, setError] = useState("");


    return (
        <div className='container'>
            <div className='login'>
                <div className='data'>
                    <label>Email
                        <input 
                            onChange={(event)=>{setEmail(event.target.value)}} 
                            type='email' 
                            value={email}>
                        </input>
                    </label>
                    <label>Contraseña
                        <input 
                            onChange={(event)=>{setContrasena(event.target.value)}} 
                            type='password' 
                            value={contrasena}>
                        </input>
                    </label>
                    <button> 
                        Ingresar
                    </button>
                    {error && <p className="error-message">{error}</p>}
                </div>
            </div>
        </div>
    );
}

export default Login; 