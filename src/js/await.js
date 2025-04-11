import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIDs = ["capi","spiderman","iron"]

export const obtenerHeroesArray = async () => {
    const heroesArr = [];


    for (const id of heroesIDs){
    const heroe = await buscarHeroeAsync(id);
    heroesArr.push(heroe)
    }
    return heroesArr; 

} 