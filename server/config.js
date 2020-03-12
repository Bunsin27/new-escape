require("dotenv").config();

module.exports = {
  port: process.env.PORT || 8080,
  db: {
    prod: process.env.MONGODB_URI || 'mongodb://localhost/forum',
    // test: 'mongodb://localhost/forum_test',
    options: {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 500
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'development_secret',
    expiry: '7d'
  }
};
