import { obtenerHeroesArray } from '../src/js/await.js';
import { buscarHeroeAsync } from './js/promesas';

const heroes = obtenerHeroesArray();

console.log(heroes); 
buscarHeroeAsync();
