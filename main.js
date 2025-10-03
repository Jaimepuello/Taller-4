import { registro, usuarios, resgistrarUsuario, libros, registrarLibros} from "./usuarios.js";
import { libros } from "./usuarios.js";
import {prestarLibro, librosDisponibles} from "./prestamos.js"
import { libros } from "./libros.js";
console.log(registro)
console.log(usuarios)
resgistrarUsuario()
console.log(libros)
registrarLibros()
prestarLibro("El principe")
function listarLibros(){
    console.log(libros)
}
listarLibros()
librosDisponibles()

function devolverLibro(){
    let libro = libros.find((L) => L.titulo && L.estado === "prestado");
    
    if (libro){
        libro.estado = "disponible";
        console.log (`El libro "${libro.titulo}" fue devuelto`);
    } else {
        console.log("No hay libros que esten prestados para devolver")
}
}