import express from 'express'


const router = express.Router();
import NumberController from './Controllers/NumberController.js';


class RouterNumeros 
{
  constructor()
  {
    this.NumberController=new NumberController()
    this.baseRoute='/numeros/'
  }

   start()
   {
        router.get(this.baseRoute, (req,res)=>{
            res.sendFile(__dirname +"/public/index.html");
        })

        router.get('/cantidad',this.NumberController.obtenerCantidad)

        router.get('/minmax',this.NumberController.obtenerMinMax)

        router.get('/entrada',this.NumberController.obtenerNumeros)

        router.get('/promedio',this.NumberController.obtenerPromedio)

        router.post('/entrada/:numero',this.NumberController.guardarNumero)

        return router
   }
}



export default RouterNumeros