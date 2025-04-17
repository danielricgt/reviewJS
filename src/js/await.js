import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIDs = ["capi", "spiderman" ];
const heroesPromesas =  heroesIDs.map(buscarHeroe); 

export const obtenerHeroesArray = async () => {
  return await Promise.all(heroesIDs.map(buscarHeroe));
};

export const obtenerHeroeAwait = async (id) => {
  try {
    const heroe = await buscarHeroeAsync(id);

    return heroe;
  } catch (err) {
    console.log('catch');
    return {
        nombre: "Sin nombre",
        poder: "Sin poder",
    };
  }
};

 export const heroesCiclo =  async ()=>{
    console.time('ciclo');
for await (const heroe of heroesPromesas){
  console.log(heroe)
}

    // const heroes =  await Promise.all(heroesPromesas);
    // heroes.forEach(heroes => console.log(heroes));
    console.timeEnd('ciclo');
 }

 export const heroeIfAwait = async (id) => {
 
      if((await buscarHeroeAsync(id)).nombre === 'Ironman'){
        console.log('es el mejor de todos')
      }
      else{
        console.log('nada')
      }
    }