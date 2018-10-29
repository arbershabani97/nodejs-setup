const express = require('express'),
      app = express(),
      keys = require('./config/keys');


// Services

// Routes
require("../routes/sample")(app);

if (process.env.NODE_ENV==='production') {
  // Can be Used for React/Angular Builds
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});