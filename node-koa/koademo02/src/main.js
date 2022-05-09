const app = require('./app/index')
const { APP_PORT } = require('./config/config.default')

// console.log('APP_PORT===>', APP_PORT)
app.listen(APP_PORT, () => {
    console.log(`server on http://localhost:${APP_PORT}`)
})