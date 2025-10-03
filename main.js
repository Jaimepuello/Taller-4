import {libros} from "./libros.js";
import {prestarLibro, librosDisponibles} from "./prestamos.js";


prestarLibro("El principe")

function listarLibros (){
    console.log(libros)
}
listarLibros()


librosDisponibles()
