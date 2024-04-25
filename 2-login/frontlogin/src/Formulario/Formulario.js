import './Formulario.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function Formulario() {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");

    const add = () => {
        Axios.post("http://localhost:3001/guardarDatos", {
            nombre: nombre,
            email: email,
            contrasena: contrasena,
        }).then(() => {
            alert("Registro Ok");
            limpiarCampos();
        })
    }

    const limpiarCampos = () => {
        setNombre("");
        setEmail("");
        setContrasena("");        
      }


    return (
        <div className='container'>
            <div className='formulario'>
                <div className='data'>

                    <label>Nombre
                        <input 
                            onChange={(event)=>{setNombre(event.target.value)}} 
                            type='text' 
                            value={nombre}>
                        </input>
                    </label>
                    <label>setEmail
                        <input 
                            onChange={(event)=>{setEmail(event.target.value)}} 
                            type='email' 
                            value={email}>
                        </input>
                    </label>
                    <label>Contraseña
                        <input>                       
                            onChange={(event)=>{setContrasena(event.target.value)}} 
                            type='password' 
                            value={contrasena}
                        </input> 
                    </label>
                    
                    <button type="submit" onClick={add}>
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Formulario; 