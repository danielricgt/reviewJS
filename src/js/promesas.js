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
export  const buscarHeroe = (id) =>{
    const heroe = heroes[id];

//    se le puede colocar caulquier nombre a los parametros del callback de la promesa
    return new Promise((resolve, reject)=>{

        if (heroe){
            resolve(heroe)
        } else {
            reject(`No existe un hero con el id ${id}`)
        }
    })
} 