// Aplicación del servidor
import express from 'express';
import morgan from 'morgan';
import path from 'path'

const app = express();

import IndexRoutes from './routes/indexRoute'

// Settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api', IndexRoutes);

// This folder for this app will be used to store public files
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;
