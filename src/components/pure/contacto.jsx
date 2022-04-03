import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class'

const ContactoComponent = ({ contacto }) => {

  return (

    <div>
        <h3>Nombre: {contacto.nombre}</h3>
        <h3>Apellido: {contacto.apellido}</h3>
        <h3>Email: {contacto.email}</h3>
        <h2>Estado: {contacto.conectado ? 'Contacto En Linea' : 'Contacto No Disponible'}</h2>
    </div>
  )
}

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ContactoComponent;
