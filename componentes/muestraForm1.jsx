const Muestra = ({data}) => {
    return (
        <div>
            <h1>Datos del usuario</h1>
            <h3>Nombre: {data.nombre}</h3>
            <h3>Apellido: {data.apellido} </h3>
            <p>Telefono: {data.telefono}</p>
            <p>Fecha de nacimiento: {data.fecha}</p>
        </div>
    )
}
export default Muestra