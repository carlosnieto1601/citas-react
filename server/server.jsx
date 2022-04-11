

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/paciente', (req, res) =>{
    res.send('lista tals')
})

app.listen(4000, () => {
    console.log(' corre en el puerto 4000')
})

