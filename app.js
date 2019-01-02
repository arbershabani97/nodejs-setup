const express = require('express'),
      app = express(),
      keys = require('./config/keys'),
      http = require('http'),
      path = require('path');
      
const PORT = process.env.PORT || 5000;

// Routes
require('./src/routes')(app);

// Server Setup
require('./node-server')(express, app, http, path, PORT);