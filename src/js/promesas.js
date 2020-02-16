const heroes = {
    capi: {
        nombre: "Capitán América",
        poder: "Aguantar inyecciones sin morir"
    },
    iron: {
        nombre: "Ironman",
        poder: "Absurda cantidad de dinero"
    },
    spider: {
        nombre: "Spiderman",
        poder: "La mejor reacción alergica a las picaduras de araña"
    }
};

export const buscarHeroe = ( id )=> {
    const heroe = heroes[id];
    // La promesa recibe un callback
    return new Promise( (resolve,reject) => {
        if (heroe) {
            setTimeout(() => {
                resolve(heroe)
            }, 1000);
            
        }else{
            reject(`No existe un héroe con el id ${ id }`);
        }
    });
}
// Con async
export const buscarHeroeAsync = async(id) => {
    const heroe = heroes[id];
    // La promesa recibe un callback
    
        if (heroe) {
           return heroe
        } else {
            // si sabemos cual es el error sin Error caso contrario va
            throw `No existe un héroe con el id ${id}`;
        }
   
}

// Ejemplo Promesas race

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa Lenta");
    }, 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa Media");
    }, 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa Rápida");
    }, 1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}

