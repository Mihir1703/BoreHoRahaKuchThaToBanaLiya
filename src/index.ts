import express, { Express } from 'express';
import cors from 'cors';
import 'dotenv/config';
import { serverRoutes } from './app.module';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use(serverRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
