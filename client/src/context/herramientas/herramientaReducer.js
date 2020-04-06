import {
    ADD_HERRAMIENTA,
    DELETE_HERRAMIENTA,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_HERRAMIENTA,
    FILTER_HERRAMIENTAS,
    CLEAR_FILTER
} from '../types';

export default (state, action) =>{
    switch(action.type){
        case ADD_HERRAMIENTA:
            return{
                ...state,
                herramientas: [...state.herramientas, action.payload]
            };
        case DELETE_HERRAMIENTA:
            return{
                ...state,
                herramientas: state.herramientas.filter(herramienta => herramienta.id !== action.payload)
            }
        case SET_CURRENT:
            return{
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return{
                ...state,
                current: null
            }
        case UPDATE_HERRAMIENTA:
            return{
                ...state,
                herramientas: state.herramientas.map(herramienta => herramienta.id === action.payload.id ? action.payload : herramienta)
            }
        case FILTER_HERRAMIENTAS:
            return{
                ...state,
                filtered: state.herramientas.filter(herramienta =>{
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return herramienta.nombre.match(regex);
                })
            }
        case CLEAR_FILTER:
            return{
                ...state,
                filtered: null
            }
        default:
            return state;
    }
}