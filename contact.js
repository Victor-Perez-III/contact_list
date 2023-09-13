let misContactos = []

const agregarContactos = (id, nombre, apellido, telefono, ciudad, direccion) => {
    let nuevo = {
        id,
        nombre,
        apellido,
        ubicaciones: {
            ciudad, direccion
        }
    }
    misContactos.push(nuevo)
}

agregarContactos(1, "Victor", 'Perez', 3013913309, 'Santa Marta', 'Carrera 4ta')
agregarContactos(2, 'Adriana', 'Vasquez', 3005667789, 'Barranquilla', "Avenida's Flowers")
agregarContactos(3, 'Luis', 'Sanchez', 3122203592, 'Bogota', 'Calle 15',)

console.log(misContactos);

// Eliminar un contacto 

function eliminarContacto(nombre) {
    for (let i = 0; i < misContactos.length; i++) {
        if (misContactos[i].nombre === nombre) {
            misContactos.splice(i, 1);
        }
    }
};
eliminarContacto("Luis")
console.log(misContactos);
