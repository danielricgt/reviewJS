import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIDs = ["capi", "spiderman", "iron"];

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
