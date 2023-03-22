// const  saludar = function(nombre){
//     return `Hola, ${nombre}`;
// }

//saludar = 20;

const saludar2 = (nombre) =>{
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) =>`Hola, ${nombre}`;


//console.log(saludar('Goku'))


console.log(saludar3('Goku'));

const getUser= () => ({
    uid : 'ABCD12',
    username:'elusuario',
});


console.log(getUser());

const getUsuarioActivo = (nombre) => ({
    
        uid:'adfasd55',
        username: nombre
    
});

const usuarioActivo = getUsuarioActivo('Facundo');
console.log(usuarioActivo);

