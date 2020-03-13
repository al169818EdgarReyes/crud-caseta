const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Herramientas = require('../models/Herramientas');

//@router           GET api/herramientas
//@desc             Obtiene todas las herramientas
//@access           Private
router.get('/',auth, async (req, res) =>{
    try{
        const herramientas = await Herramientas.find({}).sort({ date: 1 });
        res.json(herramientas);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@router           POST api/herramientas
//@desc             Da de alta herramienta
//@access           Private
router.post(
    '/', 
[
    auth, 

    [check('numeroInv', 'Por favor agrega un núm. de inv').not().isEmpty(),
    //check('numeroInv', 'Solo se aceptan número en el num. de inv').isNumeric,
    check('nombre', 'Por favor agrega un nombre a la herramienta').not().isEmpty(),
    check('cantidadDisp', 'Por favor agrega la cantidad disponible').not().isEmpty(),
    //check('cantidadDisp', 'Solo se aceptan número en la cantidad disponible').isNumeric,
    check('caseta', 'Ingresa la caseta a la que pertenece la herramienta').not().isEmpty()]
], 

async (req, res) =>{
    //Valida los errores y muestra mensaje si hay.
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    //Toma los valores del 'body' del 'request'
    const { numeroInv, nombre, descripcion, cantidadDisp, caseta, fechaArribo } = req.body;

    try{
        //Busca una herramiento por el numero de inv en la base de datos.
        let hayHerramienta = await Herramientas.findOne({ numeroInv });

        //Si ya existe una muestra error.
        if(hayHerramienta) {
            return res.status(400).json({ msg:'Ya existe la herramienta' });
        }

        //Crea el objeto de la herramienta.
        const nuevaHerramienta = new Herramientas({
            numeroInv,
            nombre, 
            descripcion, 
            cantidadDisp,
            caseta, 
            fechaArribo
        });

        //Guarda la herramienta en la base de datos.
        const herramienta = await nuevaHerramienta.save();

        //Muestra el objeto de la herramienta en el 'res'.
        res.json(herramienta);

    //Si hay error lo muestra
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@router           PUT api/contacts/:id
//@desc             Actualizar herramienta
//@access           Private
router.put('/:id', auth, async (req, res) =>{
    //Valida errores
    const errors = validationResult(req);
	if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
        
    //Toma los valores del 'body' del 'request'
    const { numeroInv, nombre, descripcion, cantidadDisp, caseta, fechaArribo } = req.body;

    //Construye el objeto herramienta
    const camposHerramienta = {};
    if(numeroInv) camposHerramienta.numeroInv = numeroInv;
    if(nombre) camposHerramienta.nombre = nombre;
    if(descripcion) camposHerramienta.descripcion = descripcion;
    if(cantidadDisp) camposHerramienta.cantidadDisp = cantidadDisp;
    if(caseta) camposHerramienta.caseta = caseta;
    if(fechaArribo) camposHerramienta.fechaArribo = fechaArribo;

    try{
        let herramienta = await Herramientas.findById(req.params.id);

        if (!herramienta) return res.status(404).json({ msg: 'No se encontró la herramienta' });

        herramienta = await Herramientas.findByIdAndUpdate(
            req.params.id,
            { $set: camposHerramienta },
            { new: true}
        );

        res.json(herramienta);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
    
});

//@router           DELETE api/contacts/:id
//@desc             Actualizar herramienta
//@access           Private
router.delete('/:id', auth, async (req, res) =>{
    try{
        let herramienta = await Herramientas.findById(req.params.id);

        if (!herramienta) return res.status(404).json({ msg: 'No se encontró la herramienta' });

        await Herramientas.findByIdAndRemove(req.params.id);

        res.json({msg: 'Se eliminó la herramienta'});
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;