
import numberFile from "../Model/numberFile.js"
import Utils from "../Utils/Utils.js"
class NumbersService
{
    constructor()
    {
        //establecer modelo con métodos de FS
        this.model = numberFile
        this.utils=Utils
    }


    obtenerCantidad=async()=>
    {
        const numeros=await this.model.obtenerNumeros()
        const cantidad=numeros.length
        return cantidad
    }

    obtenerMin=async()=>
    {
        const numeros=await this.model.obtenerNumeros()
        const min=this.utils.obtenerMin(numeros)
        return min
    }

    obtenerMax=async()=>
    {
        const numeros=await this.model.obtenerNumeros()
        const max=this.utils.obtenerMax(numeros)
        return max

    }

    obtenerPromedio=async()=>
    {
        const numeros=await this.model.obtenerNumeros()
        const promedio=this.utils.promedio(numeros)
        return promedio
    }

    obtenerNumeros=async()=>
    {
        const numeros=await this.model.obtenerNumeros()
        return numeros
    }
    guardarNumero=async numero =>
    {
        const numeroGuardado = await this.model.guardarNumero(numero)
        return numeroGuardado
    }
}

export default NumbersService