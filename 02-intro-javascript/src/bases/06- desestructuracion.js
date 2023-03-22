
//desestructuracion
//asignacion desestructurante

const persona ={
    nombre:'Tony',
    edad:45,
    clave:'Ironman'
};



// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

//const {nombre} = persona;  
//renombrar la variable
//const {nombre:nombre2} = persona;

//console.log(nombre);

// const retornaPersona = (usuario)=> {
//  console.log(usuario)
// }

//retornaPersona(persona);

const retornaPersona = ({clave, nombre, edad, rango ='Capitan'}) =>{
   //console.log(nombre, edad, rango);
   return {
    nombreClave: clave,
    anios : edad,
    latlng :{
        lat:52916,
        lng:-282
    }
   }
};

//objeto anidado desestructurado
const {nombreClave, anios, latlng:{lat,lng}} = retornaPersona(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
