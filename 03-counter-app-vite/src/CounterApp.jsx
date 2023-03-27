import PropTypes from 'prop-types';


 // props
 export const CounterApp = ({value}) =>{
   // console.log(props);
   if(!value){
    throw new Error('No existe el value');
   }
    return(
         <>
       <h1>Counter App</h1>
        <p>{value}</p>
   
        </>
       
    ) ;
 }
 
//se colocan al final
CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
   
}


