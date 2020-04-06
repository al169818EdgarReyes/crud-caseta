import React, {useState, useContext, useEffect } from 'react';
import HerramientaContext from '../../context/herramientas/herramientaContext';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import BuildIcon from '@material-ui/icons/Build';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import purple from '@material-ui/core/colors/purple';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#013ca6',
    },
    secondary: {
      main: '#f9ed13',
    },
  },
});

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'center',
  },

  paper: {
    margin: theme.spacing(2, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  textField: {
    padding: theme.spacing(2),
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  icon: {
    margin: theme.spacing(1),
    backgroundColor: '#013ca6'
  },

  formControl: {
    minWidth: 120,
    marginTop: theme.spacing(2),
  },

  button: {
    marginTop: theme.spacing(1),
  }

}));

const FormularioHerramienta = () =>{
  const classes = useStyles();

  const herramientaContext = useContext(HerramientaContext);

  const { addHerramienta, current, clearCurrent, updateHerramienta } = herramientaContext;

  useEffect(() => {
    if(current !== null){
        
        setHerramienta(current);
    }else{
      setHerramienta({
        numInv: '',
        nombre: '',
        desc: '',
        cant: '',
        caseta: 'D1-106'
      });
    }
}, [herramientaContext, current]);

  const [herramienta, setHerramienta] = useState({
    numInv: '',
    nombre: '',
    desc: '',
    cant: '',
    caseta: 'D1-106',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png'
  });

  const { numInv, nombre, desc, cant, caseta, img } = herramienta;

  const onChange = e => setHerramienta({...herramienta, [e.target.name] : e.target.value});

  const onSubmit = e => {
    e.preventDefault();
    if(current === null){
      addHerramienta(herramienta);
    }else{
      updateHerramienta(herramienta);
    }
    clearAll();
  }

  const clearAll = () =>{
    clearCurrent();
  }

  return (
    <div className={classes.root}>
          <div className={classes.paper}>
            
          <Avatar className={classes.icon}>
            <BuildIcon />
          </Avatar>

            <Typography component="h1" variant="h5">
              Alta de herramienta
            </Typography>

            <form className={classes.form} onSubmit={onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="# de Inventario"
                  name="numInv"
                  autoFocus
                  value={numInv}
                  onChange={onChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="nombre"
                  label="Nombre herramienta"
                  value={nombre}
                  onChange={onChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="desc"
                  label="Descripción"
                  value={desc}
                  onChange={onChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="cant"
                  label="Cantidad Disponible"
                  value={cant}
                  onChange={onChange}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel>Caseta</InputLabel>
                    <Select
                      labelId="caseta-label"
                      id="caseta"
                      label="Caseta"  
                      name='caseta'
                      value={caseta}
                      onChange={onChange}
                    >
                      <MenuItem value={'D1-106'}>D1-106</MenuItem>
                      <MenuItem value={'D1-111'}>D1-111</MenuItem>
                      <MenuItem value={'D2-105'}>D2-105</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
              </Grid>
              <ThemeProvider theme={theme}>
              <Button 
                variant="contained" 
                fullWidth
                color='primary'
                type='submit'
                className={classes.button}
              >
                {current === null ? 'Dar de alta' : 'Guardar cambios'}
              </Button>
              </ThemeProvider>
              {current &&
                <Button 
                variant="contained" 
                fullWidth
                color='secondary'
                className={classes.button}
                onClick={clearAll}
              >
                Borrar Campos
              </Button>
              }
            </form>
          </div>
  </div>
  );
}

export default FormularioHerramienta;