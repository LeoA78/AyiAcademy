import './style.css';
import React, { useState} from 'react';
import DataInput from '../DataInput';

function Form() {
    const [userData, setUserData] = useState({})

    const user = { title: 'Datos de Usuario', inputs: [{ id: 1, type: 'text', placeholder: 'Nombre' }, { id: 2, type: 'text', placeholder: 'Apellido' }] };
    const contact = { title: 'Datos de Contacto', inputs: [{ id: 1, type: 'tel', placeholder: 'Teléfono' }, { id: 2, type: 'email', placeholder: 'Email' }] };

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
    }

/*      useEffect(() => {
        console.log(userData)
    }, [userData])  */


    return (
        <form className='form-container'>
            <div className="form-header">
                <h2>Formulario</h2>
            </div>
            <div className="form-body">
                <DataInput data={user} handleChange={handleChange} />
                <DataInput data={contact} handleChange={handleChange} />
            </div>

            <div className="form-footer">
                <button onClick={(e) => handleSubmit(e)}>Enviar Datos</button>
            </div>

        </form>
    );
}

export default Form;