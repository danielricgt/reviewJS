import { obtenerHeroesArray } from '../src/js/await.js';

console.time('await');

obtenerHeroesArray().then(heroes => {console.table(heroes);
console.timeEnd('await')
})

