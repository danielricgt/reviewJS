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
            setTimeout(() => resolve(heroe), 1000);
            
        } else {
            reject(`No existe un heroe con el id ${id}`)
        }
    })
}

const promesaLenta = new Promise((resolve, reject) => {
setTimeout(( ) => resolve('promesa lenta'), 4000);
})

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(( ) => resolve('promesa media'), 2000);
    })

    const promesaRapida = new Promise((resolve, reject) => {
        setTimeout(( ) => resolve('promesa rapida'), 1000);
        })

        export {

            promesaLenta as default,
            promesaMedia,
            promesaRapida
        }

        export  const buscarHeroeAsync =  async (id) =>{
            const heroe = heroes[id];
        
                if (heroe){
                    return heroe
                } else {
                    throw Error (`No existe un heroe con el id ${id}`);
                }

        }