
import { useState } from 'react'; //Hook
import PropTypes from 'prop-types';


 // props
 export const CounterApp = ({value}) =>{
    const [ counter, setCounter ] = useState( value );

   const handleAdd = () => 
    {
    setCounter (counter + 1);
    //setCounter((c) => c + 1);
    }

    return(
         <>
       <h1>Counter App</h1>
        <p> { counter } </p>

        <button onClick={handleAdd}> +1 </button>
   
        </>
       
    ) ;
 }
 
//se colocan al final
CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
   
}


