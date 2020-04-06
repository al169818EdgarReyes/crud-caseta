import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export default function PaymentForm() {
  
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Lista de Herramientas
      </Typography>
      <Grid container spacing={2}> 
      <Grid item xs={6} sm={12}>
          <TextField
            required
            label="Buscar Herramienta"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}