module.exports = (express, app, http, path, PORT) => {
    switch (process.env.NODE_ENV){
      case 'production':
        /*
        // Serve React/Angular Builds
            app.use(express.static('client/build'));
            app.get('*', (req, res) => {
              res.sendFile(path.resolve('client', 'build', 'index.html'));
            });
        */
        
        // Create an HTTP service
            http.createServer(app).listen(PORT);
        break;
      
      case 'development':
        /*
        // Serve React/Angular Builds
            app.use(express.static('client/build'));
            app.get('*', (req, res) => {
              res.sendFile(path.resolve('client', 'build', 'index.html'));
            });
        */
        
        app.listen(PORT, () => console.log(`Listening on port`, PORT));
        break;
        
      case 'testing':
        app.listen(PORT, () => console.log(`Listening on port`, PORT));
        break;
        
      default:
    }
}