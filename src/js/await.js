import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = ['capi','iron','spider'];
// Arreglo de 3 promesas
const heroesPromesa = heroesIds.map(buscarHeroe);
// const heroesPromesa= heroesIds.map(id => buscarHeroe(id));


export const obtenerHeroesArr = async() =>{

    const heroesArr = [];

    for (const id of heroesIds ) {
        // Forma Normal
        // const heroe = await buscarHeroe(id);
        //       heroesArr.push( heroe );    
        // Forma Optimizada
        heroesArr.push( buscarHeroe(id))
    }
   
    // Mala practica
    // setTimeout(() => {
    //     console.log('Obtener los cambios');
    //     console.table(heroesArr);
    // }, 1000);

    // Forma Normal
    // return heroesArr

    // Forma Optimizada
    return await Promise.all( heroesArr);
}

// Forma más elegante de hacer procedimiento
export const obtenerHeroesArrElegante = async () => {
    // espera que el promise.all se resuelva - se comienza a resolver del parentis mas interno hacia afuera
    return await Promise.all(heroesIds.map( buscarHeroe));

}


export const ObtenerHeroeAwait = async(id) =>{

    // Intenta hacer este código
    try {
        // buscarHeroeAsync : regresa una promesa del heroe respectivo si la encuentra y si no lanza un error
        // await : espera que se resuelva la promesa
        const heroe = await buscarHeroeAsync(id);

        return heroe;
    // Si algo tira un error 
    } catch (err) {
        console.log('Catch');
        // console.log(err);
        // puedo siparar el throw en el catch
        // throw err;
        return{
            // regreso un objeto literal
            nombre:'Sin nombre',
            poder: 'Sin poder'
        }
    }

}


export const heroesCiclo = async() =>{

    console.time('HeroesCiclo');

    // Tercera Forma
    // heroesPromesa.forEach( async(p) => console.log(await p));

    // Segunda Forma - Ideal
    for await(const heroe of heroesPromesa) {
        console.log(heroe);
    }
    
    // Primera Forma
    // const heroes = await Promise.all(heroesPromesa);

    // console.log(heroes); // muestro arreglo

    // heroes.forEach(heroe => console.log(heroe));
    console.timeEnd('HeroesCiclo');
    
   
}


export const heroeIfAwait = async(id) => {
    if ((await buscarHeroeAsync(id)).nombre === 'Ironman' ) {
        console.log(' Es el mejor de todos')
    }else{
        console.log('Naaaaa');
    }
}