import bodyParser from 'body-parser';
import express, { Application } from 'express';
import routes from './routes';
import mongoose from 'mongoose';

// Database connection
const mongoURI = 'mongodb://mongodb:27017/app';
mongoose.connect(mongoURI);

// Express app
const app: Application = express();

// Body-parser
app.use(bodyParser.json());

// Routes
app.use(routes);

export { app, mongoose };
