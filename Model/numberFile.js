import fs from 'fs'

const nombreArchivo = 'numbers.json'


const obtenerNumeros=async()=>
{
    let numeros = []
    try {
        numeros = await JSON.parse(await fs.promises.readFile(nombreArchivo, 'utf-8'))
    }
    catch(error) 
    {
        throw new Error('Error en obtención de números en numberFile')
    }
    return numeros
}

const guardarNumero = async(numero) => {
    let numeros = []
    try {
        numeros = await JSON.parse(await fs.promises.readFileSync(nombreArchivo, 'utf-8'))
    }
    catch 
    {
        throw new Error('Error en guardado de número en numberFile')
    }

    numeros.push(numero)

    fs.writeFileSync(nombreArchivo, JSON.stringify(numeros, null, '\t'))

    return numero
}

export default {
    guardarNumero,obtenerNumeros
}