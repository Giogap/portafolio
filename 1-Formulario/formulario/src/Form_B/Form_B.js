import './Form_B.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function Form() {

    const [nombre, setNombre] = useState("");
    const [genero, setGenero] = useState("");
    const [biografia, setBiografia] = useState("");
    const [pais, setPais] = useState("");
    const [numero_contacto, setNumero_contacto] = useState("");

    const add = () => {
        Axios.post("http://localhost:3001/guardarDatos", {
            nombre: nombre,
            genero: genero,
            biografia: biografia,
            pais: pais,
            numero_contacto: numero_contacto,
        }).then(() => {
            alert("Registro Ok");
            limpiarCampos();
        })
    }

    const limpiarCampos = () => {
        setNombre("");
        setGenero("");
        setBiografia("");        
        setPais("");
        setNumero_contacto("");
      }


    return (
        <div className='container'>
            <div className='form'>
                <div className='data'>
                    <label>Nombre
                        <input onChange={(event)=>{
                            setNombre(event.target.value);
                            }} type='text' value={nombre}>
                        </input>
                    </label>
                    <label>Genero
                        <input onChange={(event)=>{
                            setGenero(event.target.value);
                            }} type='text' value={genero}>
                        </input>
                    </label>
                    <label>Biografia
                        <textarea onChange={(event)=>{
                            setBiografia(event.target.value);
                            }} type='text' value={biografia}>
                        </textarea>
                    </label>
                    <label>Pais
                        <input onChange={(event)=>{
                            setPais(event.target.value);
                            }} type='text' value={pais}>
                        </input>
                    </label>
                    <label>Numero de Contacto
                        <input onChange={(event)=>{
                            setNumero_contacto(event.target.value);
                        }} type='text' value={numero_contacto}>
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

export default Form; 