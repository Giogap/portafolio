import React from 'react';
import './Form_B.css';

function Form() {
    return (
        <div className='container'>
            <div className='form'>
                <div className='data'>
                    <label>Nombre
                        <input type='text'>
                        </input>
                    </label>
                    <label>Genero
                        <input type='text'>
                        </input>
                    </label>
                    <label>Biografia
                        <textarea>

                        </textarea>
                    </label>
                    <label>Pais
                        <input type='text'>
                        </input>
                    </label>
                    <label>Numero de Contacto
                        <input type='text'>
                        </input>
                    </label>
                    <button type="submit">Guardar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Form; 