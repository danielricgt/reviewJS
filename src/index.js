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
 
buscarHeroPromesa(heroeId1).then(heroe =>{
    console.log(`envando a ${heroe.nombre} a la mision`)
})