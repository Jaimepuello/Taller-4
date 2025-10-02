let registro = [
{Nombre: "Oscar Montoya", Correo: "oscar123@gmail.com"},
{Nombre: "Jonathan Luna", Correo: "luna321@gmail.com"},
{Nombre: "Andres Lopez", Correo: "andresl000@gmail.com"}
]


let usuarios = []
function resgistrarUsuario (Nombre, Correo){
    const nuevoUsuario= {Nombre, Correo}
    registro.push (nuevoUsuario)
    console.log ("Usuario registrado:", nuevoUsuario)
}