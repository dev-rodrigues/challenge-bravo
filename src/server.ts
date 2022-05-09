import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';

import ConnectionDatabase from "./config/database";
import swaggerFile from './swagger.json';
import routes from "./http";

const connectionDataBase = new ConnectionDatabase();
connectionDataBase.connect().then(r => console.log('Connected to database'));

const app = express();

app.use(express.json());
app.use(cors())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))
app.use(routes);

app.listen(3333, () => {
    console.log('🚀 Server started on port 3333! 🚀');
});