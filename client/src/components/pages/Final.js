import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const herramientas = [
  { name: 'Martillo', desc: 'Martillo Grande', price: 'x1' },
  { name: 'Resistencia 20k', desc: '-', price: 'x5' },
  { name: 'Protoboard', desc: 'Marca STEREN', price: 'x1' },
];

const estudiante = [
  { name: 'Nombre', detail: 'Edgar' },
  { name: 'Apellido', detail: 'Reyes' },
  { name: 'Carrera', detail: 'Ing. Software' },
  { name: 'Materia', detail: 'Redes I' },
  { name: 'Laboratorio', detail: 'D1-105' },
  { name: 'Maestro', detail: 'Alan Ponce' }
];

const becario = [
  { name: 'Nombre', detail: 'Gustavo Cerna' },
  { name: 'Matrícula', detail: '169837' }
];

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resumen Vale  
      </Typography>
      <List disablePadding>
        {herramientas.map(product => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
      </List>

      <Grid container spacing={2}>

        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Datos Estudiante
          </Typography>
          <Grid container>
            {estudiante.map(payment => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>

        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Datos Becario
          </Typography>
          <Grid container>
            {becario.map(payment => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}