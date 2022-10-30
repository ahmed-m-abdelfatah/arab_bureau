import './getENV.js';
import express from 'express';
import next from 'next';
import appRoutes from './app_routes.js';
import dbConnect from './DB/dbConnect.js';

const port = process.env.PORT;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // You should add all DB and routes here [before] server.all
    dbConnect();
    appRoutes(server);

    server.all('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, () => {
      console.log(`server - Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.log(ex.stack);
    process.exit(1);
  });
