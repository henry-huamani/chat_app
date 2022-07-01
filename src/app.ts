import express from 'express';
import path from 'path';

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname,'..','public')));

module.exports = app;