import './Formulario.css'

function Formulario() {
    return (

        <section className='form-total'>
            <div className='nombres'>
                <label htmlFor="Nombre">Nombre y apellido </label>
                <input type="text" placeholder='Ingrese su nombre' />
            </div>
            <div className='correo'>
                <label htmlFor="Correo electrónico">Correo electrónico </label>
                <input type="text" placeholder='Ingrese su e-mail' />
            </div>
            <div className='mensaje'>
                <label htmlFor="Mensaje">Mensaje </label>
                <input type="text" placeholder='Escriba su mensaje o consulta :)' />
            </div>


        </section>

    )
}
export default Formulario