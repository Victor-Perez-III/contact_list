let contacto1 = {
    id: 1,
    nombre: "juan",
    apellido: 'Perez',
    telefono: 3012405564,
    ubicaciones: {
        ciudad: 'Bogota',
        direccion: 'Carrera 32 #13a'
    }
};

let listaContacto = [contacto1]

function crearContacto(id, nombre, apellido, telefono, ciudad, direccion) {
    let contacto = {
        id,
        nombre,
        apellido,
        telefono,
        ubicaciones: {
            ciudad,
            direccion
        }
    }
    listaContacto.push(contacto);
};

crearContacto(2, 'Pacho', 'Yepes', 300896544, 'Cali', 'Cra 9');

function eliminarContacto(nombre) {
    for (let i = 0; i < listaContacto.length; i++) {
        if (listaContacto[i].nombre === nombre) {
            listaContacto.splice(i, 1);
        }
    }
};
eliminarContacto("juan")
console.log(listaContacto);


// Actualizar un contacto

function actualizarContacto(nombre, nuevosDatos) {
    for (let i = 0; i < listaContacto.length; i++) {
        if (listaContacto[i].nombre === nombre) {
            // Actualiza los datos del contacto
            Object.assign(listaContacto[i], nuevosDatos);
        }
    }
}