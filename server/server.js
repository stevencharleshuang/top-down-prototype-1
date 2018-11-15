const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../static')));
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../static/index.html'))
});

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  console.log(`I'm sorry, Dave. I'm afraid I can't do that.`);
  res.status(500).send(`I'm sorry, Dave. I'm afraid I can't do that.`);
});

app.listen(PORT, () => {
  console.log(`Server up and running! Port: ${PORT} Env: ${app.get('env')}`);
});