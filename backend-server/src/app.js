'use strict';

import express from 'express';
import io from './io.js'
import cors from 'cors';
import morgan from 'morgan';

import router from './api/api.js';
import uploadRouter from './api/uploadRouter';

import errorHandler from './middleware/error';
import notFound from './middleware/404';


import authSubscriber from '../subscribe/auth.js';
import messageSubscriber from '../subscribe/message.js';

let app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(uploadRouter);
app.use(router);
app.use(cors({
  origin: process.env.CORS_ORIGINS.split(' '),
  credentials: true,
}));

const state = {
  isOn: false,
  http: null,
};
// app.use(notFound);
// app.use(errorHandler);


let isRunning = false;

app.start = (port) => {

  if (isRunning) {
    console.log(`Server already running`);
  } else {
    app.listen(port, err => {
      if (err) { throw err; }
      isRunning = true;
      console.log(`Server running on port ${port}`);
      let subscribers = Object.assign(authSubscriber, messageSubscriber); io(state.http, subscribers);
    });
  }
};

app.stop = () => {
  app.close(() => {
    console.log(`Server has been shut down`);
    isRunning = false;
  });
};

module.exports = app;