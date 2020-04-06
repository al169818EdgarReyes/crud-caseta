import React, { Fragment, useContext } from 'react';
import ItemHerramienta from './ItemHerramienta';
import HerramientaContext from '../../context/herramientas/herramientaContext';

const Herramientas = () => {

    const herramientaContext = useContext(HerramientaContext); 
    const { herramientas, filtered } = herramientaContext;

    return(
        <Fragment>
            {filtered !== null 
            ? filtered.map(herramienta => (
                <ItemHerramienta key={herramienta.id} herramienta={herramienta} />
            ))
        
            : herramientas.map(herramienta =>(
                <ItemHerramienta key={herramienta.id} herramienta={herramienta} />
            ))}
        </Fragment>
    );
}

export default Herramientas;
