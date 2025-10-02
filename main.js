import {libros} from "./libros.js";
import {prestarLibro} from "./prestamos.js";


prestarLibro("El principe");

function listarLibros (){
    console.log(libros)
}
listarLibros()