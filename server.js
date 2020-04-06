 const express = require('express');
 const connectDB = require('./config/db');

 const app = express();

//Connect Database
connectDB();

//Init MiddleWare

app.use(express.json({ extended: false}));

 app.get('/', (req, res) =>
    res.json({ msg: 'Este es el CRUD de la caseta...' })
 );

 //Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/users', require('./routes/users'));
app.use('/api/herramientas', require('./routes/herramientas'));

 const PORT = process.env.PORT || 5000;

 app.listen(PORT, () => console.log(`Server started on port ${PORT}`));