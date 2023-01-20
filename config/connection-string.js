const getConnectionString = () => {
  return process.env.NODE_ENV === 'test'
      ? process.env.MONGO_URI_TEST
      : process.env.MONGO_URI
}

module.exports = getConnectionString
