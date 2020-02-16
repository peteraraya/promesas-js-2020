import "./styles.css";
import { promesaLenta, promesaMedia, promesaRapida } from "./promesas";
import { buscarHeroe, buscarHeroeAsync } from "./promesas";

// promesaLenta.then( console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise Race
// Promise.race([promesaLenta, promesaMedia,promesaRapida])
//        .then( console.log)
//        .catch(console.warn);

// Forma de Promesa normal
buscarHeroe('capi2')
    .then( console.log)
    .catch(console.warn);

//Promesa con async
buscarHeroeAsync('iron2')
    .then(console.log)
    .catch(console.warn);