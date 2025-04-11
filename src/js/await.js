import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIDs = ["capi","spiderman","iron"]

export const obtenerHeroesArray = async () => {
    return await Promise.all (heroesIDs.map(buscarHeroe));
} 