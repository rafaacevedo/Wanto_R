import axios from 'axios';

const autenticar = async () => {
    try {
        const url = 'https://auth.contabo.com/auth/realms/contabo/protocol/openid-connect/token';
        const data = new URLSearchParams();
        data.append('grant_type', 'password'); // Tipo de concesión
        data.append('client_id', 'INT-12298804'); // Reemplaza 'tu_client_id' por tu ID de cliente
        data.append('username', 'sistemas@wowdesarrollos.com'); // Reemplaza 'tu_usuario' por tu nombre de usuario
        data.append('password', 'SmeXhuMzew8923AkEV2Uj!'); // Reemplaza 'tu_contraseña' por tu contraseña
        data.append('client_secret', 'O0hFEPiIObDZQATf5TAAJDl846YNrHIH'); // Reemplaza 'tu_your_client_secret'

        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        // El token de acceso estará en response.data.access_token
        const accessToken = response.data.access_token;
        console.log('Token de acceso:', accessToken);

        // Puedes usar el token de acceso para realizar solicitudes a otras partes de la API protegida.
    } catch (error) {
        console.error('Error al autenticar:', error);
    }
};

autenticar();
