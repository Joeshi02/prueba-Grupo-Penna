import { useState } from "react";

const Formdatos = ({ onFormSubmit }) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [fecha, setFecha] = useState("");

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleApellidoChange = (event) => {
        setApellido(event.target.value);
    };

    const handleTelefonoChange = (event) => {
        setTelefono(event.target.value);
    };

    const handleFechaChange = (event) => {
        setFecha(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = { nombre, apellido, numero: telefono, fecha };

        try {
            // Realizar la solicitud POST al endpoint correspondiente
            const response = await fetch('http://localhost:5174/api/prueba/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Manejar la respuesta del servidor si es necesario
                const responseData = await response.json();
                console.log('Respuesta del servidor:', responseData);

                // Puedes realizar acciones adicionales aquí, como actualizar el estado del componente
                // o redirigir a otra página después de un registro exitoso.

                // Llamar a la función onFormSubmit si es necesario
                onFormSubmit(responseData);
            } else {
                // Manejar errores del servidor
                console.error('Error del servidor:', response.statusText);
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    };

    return (
        <>
            <div className="card">
                <form className="card-form" onSubmit={handleSubmit}>
                    <label className="ma">
                        Nombre:
                        <input type="text" value={nombre} onChange={handleNombreChange} />
                    </label>
                    <label className="ma">
                        Apellido:
                        <input type="text" value={apellido} onChange={handleApellidoChange} />
                    </label>
                    <label className="ma">
                        Teléfono:
                        <input type="text" value={telefono} onChange={handleTelefonoChange} />
                    </label>
                    <label className="ma">
                        Fecha de nacimiento:
                        <input type="date" value={fecha} onChange={handleFechaChange} />
                    </label>
                    <button className="ma" type="submit">Guardar</button>
                </form>
            </div>
        </>
    );
};

export default Formdatos;
