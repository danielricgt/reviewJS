import "./styles.css";
import { buscarHeroe as buscarHeroCallback } from "../src/js/callbacks";
import { buscarHeroe as buscarHeroPromesa } from "../src/js/promesas";
 
const heroeId1 = "capi";
const heroId2 = "iron";

// buscarHeroe(heroeId1, (err, heroe1) => {
//   if (err) {
//     return console.error(err);
//   }
//   buscarHeroe(heroId2, (err, heroe2) => {
//     if (err) {
//       return console.log(err);
//     }
//     console.log(`enviando a ${heroe1.nombre} y  ${heroe2.nombre} a la mision`)
//   });
// });
 
// buscarHeroPromesa(heroeId1).then(heroe1 =>{
//     console.log(`envando a ${heroe1.nombre} a la mision`)
//     buscarHeroPromesa(heroId2).then(heroe2 =>{
//         console.log(`enviando a ${heroe1.nombre} y  ${heroe2.nombre} a la mision`) 
//     })
// })

Promise.all([buscarHeroPromesa(heroeId1), buscarHeroPromesa(heroId2)]).
then( ([heroe1, heroe2]) => {
    console.log(`enviando a ${heroe1.nombre} y  ${heroe2.nombre} a la mision`) 
}).catch(err => {
    alert(err);
}).finally(()=>{
    console.log('se termino el promise.all')
})