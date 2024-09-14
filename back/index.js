import express from 'express';
import apiRoutes from './routes/index.routes.js';

const app = express();

app.use('/api/v1', apiRoutes);

app.listen(3000, () => {
    console.log("Servidor 3000 corriendo")
})