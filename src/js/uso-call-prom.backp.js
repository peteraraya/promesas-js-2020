import { buscarHeroe as buscarHeroeCallback  } from "./callbacks";
import { buscarHeroe } from "./promesas";
import './styles.css';


const heroeId1 = 'capi';
const heroeId2 = 'iron2';
const heroeId3 = 'spider';


// Ejemplo Promise Hell
// buscarHeroe( heroeId1).then( heroe1 => {
//         console.log(`Enviando a ${heroe1.nombre} a la misión`);
//     buscarHeroe(heroeId2).then(heroe2 => {
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
//     });
// });

// Ejemplo Promesas en paralelo
// Promise.all([true, 'hola', 123]).then( arr => {
//             console.log('promise all : ',arr);
// }); 


Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
       .then( ([heroe1,heroe2]) =>{
    // console.log('Promise all : ',heroes);
    console.log(`Enviado a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
    }).catch(err => {
        alert(err);
    }).finally(()=>{
        console.log('Se termino el promise all')
    });



// Ejemplo Callbacks
// buscarHeroe(heroeId, (err,heroe)=>{

//     //Validación
//     if (err) {
//         // si existe error imprimimos el error
//         console.log(err)
//     }else{
//         // si no existe 
//         console.info(heroe);
//     }
// }); 

// Ejemplo Callback Hell
// buscarHeroe(heroeId1, (err, heroe1) => {
//   if (err) {
//     return console.log(err);
//   }
//   buscarHeroe(heroeId2, (err, heroe2) => {
//     if (err) {
//       return console.log(err);
//     }
//     buscarHeroe(heroeId3, (err, heroe3) => {
//       if (err) {
//         return console.log(err);
//       }
//       console.log(
//         `Enviado a ${heroe1.nombre} , ${heroe2.nombre} y ${heroe3.nombre} a la misión`
//       );
//     });
//   });
// });