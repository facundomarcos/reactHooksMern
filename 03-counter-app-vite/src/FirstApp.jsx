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
import PropTypes from 'prop-types';


 // props
 export const First = ({title, subTitle}) =>{
   // console.log(props);
   if(!title){
    throw new Error('No existe el title');
   }
    return(
         <>
       <h1>{title}</h1>
        <p>{subTitle + 1}</p>
        </>
       
    ) ;
 }

First.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}


