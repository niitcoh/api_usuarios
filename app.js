const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use('/img', express.static(path.resolve(__dirname, 'img')));

let data = [
    {
        usuario: 'nico',
        email: 'ni.torres@gmail.com',
        contraseña: 'torres'
    },
    {
      usuario: 'carlos',
      email: 'carlosavello18@gmail.com',
      contraseña: 'avello'
  }
]
  
app.use(express.json());

app.get('/api/registros', (req, res) => {
  res.json(data);
});

app.post('/api/registros', (req, res) => {
  console.log('peticion POST con body', req.body);
  data.push(req.body);
  res.send('Usuario registrado');
});

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});