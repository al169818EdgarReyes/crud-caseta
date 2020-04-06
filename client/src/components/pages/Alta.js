import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormularioHerramienta from '../herramientas/FormularioHerramienta';
import Herramientas from '../herramientas/Herramientas';
import FiltroHerramientas from '../herramientas/FiltroHerramientas';

const Alta = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <FormularioHerramienta /> 
      </Grid>

        <Grid item xs={12} sm={6}>
          <FiltroHerramientas />
          <Herramientas />
        </Grid>
    </Grid>
  )
}

export default Alta;
