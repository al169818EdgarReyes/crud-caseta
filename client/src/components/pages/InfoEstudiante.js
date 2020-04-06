import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function InfoEstudiante() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Información Estudiante
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="nombre"
            name="nombre"
            label="Nombre"
            fullWidth
            autoComplete="nom"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="apellido"
            name="apellido"
            label="Apellido"
            fullWidth
            autoComplete="apellido"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            id="matricula"
            name="matricula"
            label="Matricula"
            fullWidth
            autoComplete="matricula"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="carrera"
            name="carrera"
            label="Carrera"
            fullWidth
            autoComplete="carrera"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="materia"
            name="materia"
            label="Materia"
            fullWidth
            autoComplete="materia"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="numlab"
            name="numlab"
            label="Laboratorio"
            fullWidth
            autoComplete="numlab"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="maestro"
            name="maestro"
            label="Maestro"
            fullWidth
            autoComplete="maestro"
          />
        </Grid>
        
      <Typography variant="h6" gutterBottom>
        Información Becario
      </Typography>

      <Grid container spacing={3}>

      </Grid>
       <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nombre"
            name="nombre"
            label="Nombre Becario"
            fullWidth
            autoComplete="nombre"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mat"
            name="mat"
            label="Matrícula Becario"
            fullWidth
            autoComplete="mat"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}