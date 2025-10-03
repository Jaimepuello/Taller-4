import {libros} from "./libros.js";


export function prestarLibro(titulo){
    const tituloLibro = libros.find (nombre => nombre.titulo == titulo)
    if (tituloLibro.estado == "no disponible") {
        console.log(`el libro esta prestado`)
    }
    else{
        console.log(`El libro esta diponible para prestar`)
        tituloLibro.estado = "No disponible"
        
    }
}

export function librosDisponibles(){
    libros.filter(d => d.estado == "disponible").forEach(d => console.log(`${d.titulo} ${d.autor}`))
}