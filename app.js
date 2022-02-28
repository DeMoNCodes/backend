import createError from 'http-errors';
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import Mongoose from 'mongoose';
const log = require('simple-node-logger').createSimpleLogger();
import index from "./routes/index"

import cors from "cors"
import https from 'https';
import fs from "fs";

Mongoose.connect("mongodb://localhost/task",
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    log.info("DATABASE CONNECTED");
  }).catch(log.error);


var app = express();
app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

 
app.use("", index);
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json({ message: err });
});

app.listen(3001, () => {
  log.info(`APP IS RUNNING 3001`)
});

