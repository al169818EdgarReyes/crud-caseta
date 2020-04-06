import React, { useContext }from 'react';
import HerramientaContext from '../../context/herramientas/herramientaContext';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginBottom: 20
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
   
    img: {
      margin: 'auto',
      display: 'block',
      width: 128,
      height: 128
    },

    caseta: {
        margin: 5,
        backgroundColor: '#0d47a1',
        color: '#FFFFFF'
    },

    button: {
        marginBottom: 10,
        marginLeft: 3
    },

    

  }));

  
const ItemHerramienta = ({ herramienta }) => {
    const classes = useStyles();

    const herramientaContext = useContext(HerramientaContext);

    const { deleteHerramienta, setCurrent } = herramientaContext;

    const { id, numInv, nombre, desc, cant, caseta, img } = herramienta;

    const onDelete = () =>{
        deleteHerramienta(id);
    }
    return (

        <div className={classes.root}>

            <Card className={classes.card} variant="outlined">
                
            {/*img && (
                  
            )*/}
            
            <Grid container spacing={2}>
                {img && (
                    <Grid item>
                        <CardMedia 
                            className={classes.img}
                            component="img"
                            src={img}
                        />
                    </Grid>
                )}

                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                {nombre}
                            </Typography>

                            {numInv && (
                                <Typography variant="body2" color="textSecondary">
                                # de Inv: {numInv}
                                </Typography>
                            )}
                            
                            {desc && (
                                <Typography variant="body2" gutterBottom>
                                {desc}
                                </Typography>
                            )}   

                        </Grid>

                        <Grid item>
                            <Button 
                                variant="outlined" 
                                color="primary"
                                startIcon={<EditIcon />}
                                size='small'
                                className={classes.button}
                                onClick={() => {setCurrent(herramienta)}}
                            >
                                Editar
                            </Button> 

                            <Button 
                                variant="outlined" 
                                color="secondary"
                                startIcon={<DeleteIcon />}
                                size='small'
                                className={classes.button}
                                onClick={onDelete}
                            >
                                Eliminar
                            </Button> 

                        </Grid>
                    </Grid>

                    <Grid item>
                        <Chip 
                            className={classes.caseta}
                            style={(caseta === 'D1-106' ? {backgroundColor: '#4B86F2'} :
                                    caseta === 'D1-111' ? {backgroundColor: '#013ca6'} :
                                    caseta === 'D2-105' ? {backgroundColor: '#95B6F4'} : null
                                    )}

                            size="small" 
                            label={caseta} 
                        />
                            
                    </Grid>
                </Grid>
            </Grid>
            </Card>
        </div>
        
    )
}

export default ItemHerramienta;