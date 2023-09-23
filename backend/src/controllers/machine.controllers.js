app.post('/api/stop-machine', async (req, res) => {
    try {
      const machineId = req.body.machineId;
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      };
  
      const requestData = {
        'machineId': machineId
      };
  
      const response = await axios.post(`https://api.contabo.com/v1/compute/instances/${machineId}/actions/stop`, requestData, config);
  
      if (response.status === 200) {
        res.json({ message: 'Solicitud de detención enviada correctamente.' });
      } else {
        res.status(response.status).json({ error: 'Error al enviar la solicitud de detención.' });
      }
    } catch (error) {
      console.error('Error al enviar la solicitud de detención:', error);
      res.status(500).json({ error: 'Error interno al procesar la solicitud.' });
    }
  });