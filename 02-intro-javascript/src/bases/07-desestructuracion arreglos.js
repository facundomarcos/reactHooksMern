
const personajes = ['Goku','Vegeta','Trunks'];

console.log(personajes[0]);

const [ , , p3] = personajes;

console.log(p3);

const retornaArreglo = () =>{
    return ['ABC', 123];
}

const arr = retornaArreglo();

console.log(arr);

const [letras, numeros]= retornaArreglo();
console.log(letras, numeros);

//tarea
const cuseState = (valor) =>{
    return [valor, ( ) => {console.log('Hola mundo')}];
}

const [nombre, setNombre] = cuseState('Goku');

//arr2[1]();

console.log(nombre);
setNombre();





