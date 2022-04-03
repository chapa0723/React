import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/contacto';

const EstadoContacto = () => {
    const defaultEstado = new Contacto ('Martin', 'Garcia','martin.garcia@gmail.com', true);

    return (
        <div>
            <h1>CONTACTO</h1>
            <ContactoComponent contacto={defaultEstado}></ContactoComponent>
        </div>
    );
};

export default EstadoContacto;
