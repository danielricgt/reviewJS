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
    callback(heroe);
}