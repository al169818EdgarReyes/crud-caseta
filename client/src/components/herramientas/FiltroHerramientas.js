import React, { useContext, useRef, useEffect } from 'react';
import HerramientaContext from '../../context/herramientas/herramientaContext';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';


const FiltroHerramientas = () => {

    const herramientaContext = useContext(HerramientaContext);
    const text = useRef('');

    const { filtered, filterHerramientas, clearFilter } = herramientaContext;


    useEffect(() => {
        if(filtered === null){
            text.current.value = '';
        }
    });

    const onChange = e =>{
        if(text.current.value !== ''){
            filterHerramientas(e.target.value);
        }else{
            clearFilter();
        }
    }

    return (
        <form>
            {/*<TextField 
                ref={text}
                variant="outlined" 
                fullWidth
                style={{marginBottom: 20, marginTop: 20}}
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                          <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                onChange={onChange}
            />*/}
            <input ref={text} type="text" placeholder="Buscar..." onChange={onChange} />

        </form>
    )
}

export default FiltroHerramientas;
