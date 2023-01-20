const session = require('express-session')
const MongoStore = require('connect-mongo')
const getConnectionString = require('./connection-string')

const createSession = () => {
  const store = MongoStore.create({ mongoUrl: getConnectionString() })

  return {
    store,
    session: session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store,
    }),
  }
}

module.exports = createSession
