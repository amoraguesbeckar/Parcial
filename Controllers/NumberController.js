import NumbersService from "../Services/NumbersService.js"

class NumberController
{
    constructor()
    {
        //Agregar new de servicio de números
        this.NumbersService=new NumbersService()
    }

    obtenerCantidad=async(req,res)=>
    {
        try
        {
            const cantidad =await this.NumbersService.obtenerCantidad()
        
            res.json({'cantidad':cantidad})
        }catch(error)
        {
            console.log(error)
        }
    }

    obtenerMinMax=async(req,res)=>
    {
        try
        {
            const min =await this.NumbersService.obtenerMin()
            const max=await this.NumbersService.obtenerMax()

            res.json({'Min':min,'Max':max})
        }catch(error)
        {
            console.log(error)
        }
    }

    obtenerPromedio=async(req,res)=>
    {
        try
        {
            const promedio = await this.NumbersService.obtenerPromedio()
            res.json({'Promedio':promedio})
        }catch(error)
        {
            console.log(error)
        }
    }

    obtenerNumeros=async(req,res)=>
    {
        try
        {
            const numeros = await this.NumbersService.obtenerNumeros()
            res.json({'Números':numeros})
        }catch(error)
        {
            console.log(error)
        }
    }

    guardarNumero=async(req,res)=>
    {
        try
        {
            const { numero } = req.body
            const numeroGuardado=await this.NumbersService.guardarNumero(numero)
            console.log(numeroGuardado)
            res.json(numeroGuardado)
        }
        catch(error)
        {
            console.log(error)
        }
    
    }
}

export default NumberController