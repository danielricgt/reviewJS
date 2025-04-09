const heroes= {
    capi: {
        nombre: 'Capitan America',
        poder: 'Fuerza'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Dinero'
    },
    spiderman: {
        nombre: 'Spiderman',
        poder: 'Aracnido'
    }
}
//callback retorna el heroe 
export const buscarHeroe = (id, callback) => {
    const heroe =  heroes[id];
    if (heroe){
        callback(null, heroe);
    }
    else {
        callback(`No existe un heroe con id ${id}`)
    }
}