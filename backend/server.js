// servidor funcional
// const express = require('express');
// const axios = require('axios');

// const app = express();
// const port = 3000;

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('¡Hola, mundo!');
// });

// app.get('/api/data', async (req, res) => {
//   try {
//     const ACCESS_TOKEN = 'tu_token_de_acceso'; // Reemplaza con tu token de acceso
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${ACCESS_TOKEN}`,
//         'x-request-id': '51A87ECD-754E-4104-9C54-D01AD0F83406',
//         'x-trace-id': '123213',
//       },
//     };

//     const response = await axios.get('https://api.contabo.com/v1/compute/instances', config);

//     res.json(response.data);
//   } catch (error) {
//     console.error('Error en la solicitud a la API:', error);
//     res.status(500).json({ error: 'Error en la solicitud a la API' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Servidor proxy en funcionamiento en http://localhost:${port}`);
// });
const express = require('express');
const axios = require('axios');
const cron = require('node-cron');
const cors = require('cors'); // Importa el paquete 'cors'

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

let accessToken = ''; // Almacena el token de acceso
let accessTokenPromise = null; // Promesa para manejar la actualización del token

// Función para autenticar y actualizar el token
const autenticarYActualizarToken = async () => {
  try {
    const url = 'https://auth.contabo.com/auth/realms/contabo/protocol/openid-connect/token';
    const data = new URLSearchParams();
    data.append('grant_type', 'password');
    data.append('client_id', 'INT-12298804');
    data.append('username', 'sistemas@wowdesarrollos.com');
    data.append('password', 'SmeXhuMzew8923AkEV2Uj!');
    data.append('client_secret', 'O0hFEPiIObDZQATf5TAAJDl846YNrHIH');

    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    // Almacena el nuevo token de acceso
    accessToken = response.data.access_token;
    console.log('Token de acceso actualizado:', accessToken);
  } catch (error) {
    console.error('Error al autenticar y actualizar el token:', error);
  }
};

// Programa la actualización del token cada 30 minutos
cron.schedule('5 * * * * *', () => {
  accessTokenPromise = autenticarYActualizarToken();
});


// Ruta para obtener el token
app.get('/api/token', async (req, res) => {
  if (!accessTokenPromise) {
    accessTokenPromise = autenticarYActualizarToken();
  }

  await accessTokenPromise;
  res.json({ accessToken });
});

// Ruta para obtener datos de la API de Contabo
app.get('/api/data', async (req, res) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`, // Utiliza el token de acceso generado automáticamente
        'x-request-id': '51A87ECD-754E-4104-9C54-D01AD0F83406',
        'x-trace-id': '123213',
      },
    };

    const response = await axios.get('https://api.contabo.com/v1/compute/instances', config);

    res.json(response.data);
  } catch (error) {
    console.error('Error en la solicitud a la API de Contabo:', error);
    res.status(500).json({ error: 'Error en la solicitud a la API de Contabo' });
  }
});

app.listen(port, () => {
  console.log(`Servidor proxy en funcionamiento en http://localhost:${port}`);
});
