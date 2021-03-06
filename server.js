//Install express server
const compression = require('compression')
const express = require('express');
const path = require('path');
const app = express();

// compress 
app.use(compression())

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.set('port', (process.env.PORT || 4200));

app.listen(app.get('port'), function() {
    console.log('Started in Node app on port', app.get('port'));
  });
  