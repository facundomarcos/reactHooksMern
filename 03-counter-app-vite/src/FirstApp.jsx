//import { Fragment } from "react";



//fragmento, agrupa elementos 
//agrupador de elementos html en un nodo padre

// export function First(){
//     return (
//         <Fragment>
//  <h1>First App</h1>
//         <p>un parrafo</p>
//         </Fragment>
       
//     ) ;
// }


// const newMensaje = {
//     message:'Hola Mundo',
//     title: 'Facundo'
// };


// const getResult =()=>{
//     return 4+4
// }


// fragmento sin importarcion
export function First(){
    return (
        <>
        {/* <h1>{getResult()}</h1> */}
        {/* <code>{JSON.stringify(newMensaje)}</code> */}
        <h1>Hola</h1>
        <p>un parrafo</p>
        </>
       
    ) ;
}