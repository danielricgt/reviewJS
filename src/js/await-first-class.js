import "./styles.css";
import promesaLenta, { promesaMedia, promesaRapida } from "./js/promesas";
import { buscarHeroeAsync, buscarHeroe } from "./js/promesas";


// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//   .then((mensaje) => {
//     console.log(mensaje);
//   })
//   .catch(console.warn);

buscarHeroe("iron2").then(console.log).catch(console.warn);
buscarHeroeAsync("capi2").then(console.log)
.catch(console.warn)