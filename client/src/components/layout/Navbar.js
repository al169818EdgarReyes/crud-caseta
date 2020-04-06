import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({title, icon}) => {
    return (
        <div className='navbar bg-primary'>
            <h1>
                <i className={ icon }/> {title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                
               {/*

                <li>
                    <Link to='/inicioSesion'>Iniciar Sesión</Link>
                </li>

                <li>
                    <Link to='/registrar'>Registrar</Link>
                </li>
                
                <li>
                    <Link to='/alta'>Alta Herramienta</Link>
                </li>


               */}
                <li>
                    <Link to='/register'>Register</Link>
                </li>

                <li>
                    <Link to='/login'>Log In</Link>
                </li>
            </ul>
        </div>
    );
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    icon : PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Laboratorios UACJ',
    icon: 'fas fa-id-card-alt'
}

export default Navbar;
