let listaContactos = [
    "Victor Perez",
    'Hector Bossa',
    'Gabriel Montoya',
    'Alexander Flores'
]

const añadirContacto = (nuevo) => {
    listaContactos.push(nuevo)
}

añadirContacto('Luz Restrepo')

const deleteContact = () => {
    listaContactos.pop()

}

deleteContact()

const imprimirContactos = () => {
    return listaContactos

}

console.log(imprimirContactos());