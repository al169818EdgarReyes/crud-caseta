import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import HerramientaContext from './herramientaContext';
import herramientaReducer from './herramientaReducer';
import {
    ADD_HERRAMIENTA,
    DELETE_HERRAMIENTA,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_HERRAMIENTA,
    FILTER_HERRAMIENTAS,
    CLEAR_FILTER
} from '../types';

const HerramientaState = props => {
    const initialState = {
        herramientas: [
            {  
               id: 1,
               numInv : 1,
               nombre: 'Martillo',
               desc: 'Herramienta utilizada para golpear cosas.',
               cant: 10,
               caseta: 'D2-105',
               img: 'https://images.homedepot-static.com/productImages/01613cf4-8182-4099-aaba-c81a47911784/svn/crescent-claw-hammers-11419c-64_1000.jpg'
            },
                
            {
                id: 2,
                numInv : 2,
                nombre: 'Protoboard',
                desc: '',
                cant: 20,
                caseta: 'D1-106',
                img: 'https://www.steren.com.mx/media/catalog/product/cache/532829604b379f478db69368d14615cd/P/r/Protoboard-de-1-bloque-y-2-tiras.-con-ensamble-de-union-deslizable_x1.jpg'
            },

            {
                id: 3,
                numInv : 3,
                nombre: 'Resistencia 20k',
                desc: '',
                cant: 80,
                caseta: 'D1-111',
                img: 'https://lh3.googleusercontent.com/proxy/Ebhb4MOK3wZHeYhz8gWLCzHvk0gMd9slJL7d4xD-LcbrvgYHwYVFiU9BcR-3yXS6J2HiqLRUeg1xI43Ux1HmCybNTGXBG1TuGe8hRrPnOcx2CrMLUfpdKch20olHFOL3LxSQ8KhSU13Z'
            }
        ],
        current: null,
        filtered: null
    };
    const [state, dispatch] = useReducer(herramientaReducer, initialState); 

    //Add herramienta
    const addHerramienta = herramienta =>{
        herramienta.id = uuidv4();
        dispatch({
            type: ADD_HERRAMIENTA,
            payload: herramienta    
        });
    }

    //Delete herramienta
    const deleteHerramienta = id =>{
        dispatch({
            type: DELETE_HERRAMIENTA,
            payload: id
        });
    }

    //Set herramienta actual
    const setCurrent = herramienta =>{
        dispatch({
            type: SET_CURRENT,
            payload: herramienta
        });
    }

    //Clear actual
    const clearCurrent = () =>{
        dispatch({
            type: CLEAR_CURRENT
        });
    }

    //Update herramienta
    const updateHerramienta = herramienta =>{
        dispatch({
            type: UPDATE_HERRAMIENTA,
            payload: herramienta
        });
    }

    //Filter herramientas
    const filterHerramientas = text =>{
        dispatch({
            type: FILTER_HERRAMIENTAS,
            payload: text
        });
    }

    //Clear filter
    const clearFilter = () =>{
        dispatch({
            type:CLEAR_FILTER
        });
    }

    return (
        <HerramientaContext.Provider
        value={{
            herramientas: state.herramientas,
            current: state.current,
            filtered: state.filtered,
            addHerramienta,
            deleteHerramienta,
            setCurrent,
            clearCurrent,
            updateHerramienta,
            filterHerramientas,
            clearFilter
        }}>
            {props.children}
        </HerramientaContext.Provider>
    );
};

export default HerramientaState;