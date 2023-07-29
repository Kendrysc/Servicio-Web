const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000; // Puedes cambiar el puerto si lo deseas

// Configurar middleware para manejar datos del formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Endpoint para listar contactos
app.get('/listar', async (req, res) => {
  try {
    const response = await axios.get('http://www.raydelto.org/agenda.php');
    const contactos = response.data;
    res.json(contactos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la lista de contactos' });
  }
});

// Endpoint para almacenar un nuevo contacto
app.post('/almacenar', async (req, res) => {
  try {
    // Supongamos que los datos del contacto a almacenar se encuentran en el cuerpo de la solicitud (req.body)
    // Puedes implementar la lógica para almacenar el contacto en la API externa aquí utilizando axios.post()
    // Por ejemplo:
    // const response = await axios.post('http://www.raydelto.org/agenda.php', req.body);
    // res.json(response.data);

    res.status(501).json({ message: 'Esta función aún no está implementada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al almacenar el contacto' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express iniciado en http://localhost:${port}`);
});
