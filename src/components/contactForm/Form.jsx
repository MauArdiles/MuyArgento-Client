import './Form.scss'
import Button from 'react-bootstrap/Button';

export const Form = () => {
  return (
    <div className="Container">
        <form action="" method="post" className="contactForm">
            <fieldset className="formField">
                <legend className="legend">Formulario de Contacto</legend>
                <ul className="form-ul" >
                    <li className="from-li">
                        <label htmlFor="Nombre" className='lbl'>Nombre:</label>
                        <input type="text" id="Nombre" name="user-name"className='inp'/>
                    </li>
                    <li>
                        <label htmlFor="Apellido" className='lbl'>Apellido</label>
                        <input type="text" id="Apellido" name="user-lastname" className='inp'/>
                    </li>
                    <li>
                        <label htmlFor="Telefono"className='lbl'>Telefono</label>
                        <input type="number" id="Telefono" name="user-phone" className='inp'/>
                    </li>
                    <li>
                        <label htmlFor="Email" className='lbl'>Email</label>
                        <input type="email" id="Email" name="user-email" className='inp'/>
                    </li>
                    <li>
                        <label htmlFor="Text" className='lbl'>Mensaje</label>
                        <textarea id="Text" name="msg" className='txt'/>
                    </li>
                </ul>
                <div className='btn'>
                <Button variant="outline-secondary" type='submit'className='btn-send'>Enviar</Button>
                <Button variant="outline-secondary" type='reset' className='btn-clean'>Limpiar</Button>
                </div>
            </fieldset>
        </form>
    </div>
  )
}
