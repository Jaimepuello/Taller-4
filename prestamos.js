import { libros } from "./libros";










































































import { libros } from "./libros";

function devolverLibro(){
    let libro = libros.find((L) => L.titulo && L.estado === "prestado");
    
    if (libro){
        libro.estado = "disponible";
        console.log (`El libro "${libro.titulo}" fue devuelto`);
    } else {
        console.log("No hay libros que esten prestados para devolver")
}
}
