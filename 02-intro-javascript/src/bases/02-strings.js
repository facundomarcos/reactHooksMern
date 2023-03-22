const nombre = 'Facundo';

const apellido = 'Marcos';

//const nombrecompleto = nombre + ' ' + apellido;

const nombrecompleto = `
${ nombre } 
${apellido}
${1+1}
`;

console.log(nombrecompleto);

function getSaludo(nombre){
    return 'HOla ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);

