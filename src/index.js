import { obtenerHeroesArray, obtenerHeroeAwait } from '../src/js/await.js';
import { rectangulo } from './js/esnext.js';

console.time('await');

obtenerHeroeAwait('capi2').then(heroes => {console.table(heroes);
console.timeEnd('await')
}).catch(console.warn);


