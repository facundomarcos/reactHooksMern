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


 // props
 export const First = ({title, subTitle}) =>{
   // console.log(props);
    return(
         <>
       <h1>{title}</h1>
        <p>{subTitle + 1}</p>
        </>
       
    ) ;
 }




