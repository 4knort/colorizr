/* eslint-disable no-console */
const chalk = require('chalk');
const app = require('../server/server');


const PORT = process.env.PORT || 5000;

app.listen(PORT, 'localhost', err => {
  err && console.error(err);
  console.log(`Listening at ${chalk.bold.cyan(`http://localhost:${PORT}/`)}`);
});
