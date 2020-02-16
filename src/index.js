import "./styles.css";
import { obtenerHeroesArr, obtenerHeroesArrElegante, ObtenerHeroeAwait, heroesCiclo, heroeIfAwait } from "./js/await";


console.time('await');

// Imprimiendo await
// obtenerHeroesArrElegante()
//     .then(heroes => {
//         console.table(heroes);

//         console.timeEnd('await'); 
//     });

// Manejo de errores
// ObtenerHeroeAwait('capi2')
//     .then(heroe => {
//         console.log(heroe);
//         console.timeEnd('await'); 
//     }).catch( console.warn);


heroesCiclo();

heroeIfAwait('iron');