//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
//promesas

import { getHeroeById } from "./bases/08-exports";



// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         //console.log('2 segundos despues')
//         //tarea
//         const p1 = getHeroeById(2);
//         //console.log(p1);
//         resolve(p1);
//         //reject('No se pudo encontrar el heroe');
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe)
// })
// .catch(err => console.warn(err));


const getHeroeByIdAsync = (id) =>{
  
    const promesa =
     new Promise( (resolve, reject) => {
        setTimeout(() => {
            //console.log('2 segundos despues')
            //tarea
            const p1 = getHeroeById(id);
            //console.log(p1);
            if(p1){
                resolve(p1);
            }
          else{
            reject('No se pudo encontrar el heroe');
          }
            //reject('No se pudo encontrar el heroe');
        }, 2000)
    });
    return promesa;
}

getHeroeByIdAsync(1)
   //.then(heroe => console.log('Heroe', heroe))
   .then(console.log)
    .catch( console.warn);