const {db} = require('./db')
const app = require('./app')
const PORT = process.env.DATABASE_URL || 3000

db.sync()
  .then(() => {
    console.log('The database is synced')
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
  })
