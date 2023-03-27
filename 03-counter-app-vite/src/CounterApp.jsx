import PropTypes from 'prop-types';


 // props
 export const CounterApp = ({value}) =>{
   // console.log(props);
   if(!value){
    throw new Error('No existe el value');
   }

   const handleAdd = () => 
    {console.log('+1');
    value = 1000;
    console.log(value);
    }

    return(
         <>
       <h1>Counter App</h1>
        <p> { value } </p>

        <button onClick={handleAdd}> +1 </button>
   
        </>
       
    ) ;
 }
 
//se colocan al final
CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
   
}


