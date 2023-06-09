import express from 'express'
import RouterNumeros from './routes.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));

const routerNumeros=new RouterNumeros()
const baseRoute=routerNumeros.baseRoute
app.use(baseRoute, routerNumeros.start());
// ------------------------------------------
//          API: Números
// ------------------------------------------
//app.use('/api/productos', routerProductos)


const PORT = 8080
const server = app.listen(PORT, () => console.log(`Escuchando http://127.0.0.1:8080`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))


