const app = require('./app');
const mongoose = require('mongoose');
const config = require('./config');

const connect = url => {
  return mongoose.connect(url, config.db.options);
};

if (require.main === module) {
  console.log(`App is running on port ${config.port}`)
  app.listen(config.port);
  connect(config.db.prod);
  mongoose.connection.on('error', console.log);
}

module.exports = { connect };
