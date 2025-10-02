import {libros} from ".\libros.js";


export function prestarLibro(titulo){
    const tituloLibro = libros.find (nombre => nombre.titulo == titulo)
    if (tituloLibro.estado == "prestado") {
        console.log(`el libro ${tituloLibro} esta prestado`)
    }
    else{
        tituloLibro.estado = "prestado"
        
    }
}