const mongoose = require('mongoose')
const getConnectionString = require('./connection-string')

const connectDB = async () => {
  const connectionString = getConnectionString()

  try {
    mongoose.set('strictQuery', true)
    
    const conn = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
