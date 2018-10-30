const express = require('express'),
      app = express(),
      keys = require('./config/keys');

// Services
require('./services/sample');

// Routes
require("./routes/sample")(app);


if (process.env.NODE_ENV==='production') {
  // Serve React/Angular Builds
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}


// Development Serving
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});

// HTTP/HTTPS Setup
/*
    const http = require("http"),
          https = require("https"),
          fs = require("fs");
          
    var options = {
      key: fs.readFileSync('./ssl/keys/key.pem'),
      cert: fs.readFileSync('./ssl/certs/cert.cert')
    };
    
    // Create an HTTP service.
    http.createServer(app).listen(80);
    // Create an HTTPS service identical to the HTTP service.
    https.createServer(options, app).listen(443);
*/