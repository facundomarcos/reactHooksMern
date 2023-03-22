const persona = {
    nombre:'Tony',
    apellido:'Stark',
    edad: 45,
    direccion:{
        ciudad:'Ney York',
        zip: 555,
        lat: 14.66,
        lng:44.7,

    },
};



//clon del objeto persona
const persona2 = {...persona}
persona2.nombre = 'Peter';

//console.table(persona);
console.log(persona);
console.log(persona2);