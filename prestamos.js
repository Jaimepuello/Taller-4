import {libros} from "./libros.js";


export function prestarLibro(titulo){
    const tituloLibro = libros.find (nombre => nombre.titulo == titulo)
    if (tituloLibro.estado == "prestado") {
        console.log(`el libro esta prestado`)
        tituloLibro.estado = "prestado"
    }
    else{
        console.log(`El libro ${tituloLibro} se encuentra prestado`)
        
    }
}