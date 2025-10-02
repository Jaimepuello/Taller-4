export let registro = [
{Nombre: "Oscar Montoya", Correo: "oscar123@gmail.com"},
{Nombre: "Jonathan Luna", Correo: "luna321@gmail.com"},
{Nombre: "Andres Lopez", Correo: "andresl000@gmail.com"}
]


export let usuarios = []
export function resgistrarUsuario (Nombre, Correo){
    const nuevoUsuario= {Nombre, Correo}
    registro.push (nuevoUsuario)
    console.log ("Usuario registrado:", nuevoUsuario)
}
resgistrarUsuario("Pedro Rodriguez", "pedro456@gmail.com")


export let libros= []
export function registrarLibros (titulo, autor, estado){
    const libroNuevo = {titulo, autor, estado}
    libros.push (libroNuevo)
    console.log ("Libro registrado:", libroNuevo)

    
}
registrarLibros("Vikingos", "Autor1", "disponible")
