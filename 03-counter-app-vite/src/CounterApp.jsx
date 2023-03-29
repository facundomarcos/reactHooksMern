
import { useState } from 'react'; //Hook
import PropTypes from 'prop-types';


 // props
 export const CounterApp = ({value}) =>{

  console.log('render');
  
    const [ counter, setCounter ] = useState( value );

   const handleAdd = () => 
    {
    setCounter (counter + 1);
    //setCounter((c) => c + 1);
    }

    const handleSubs = () =>  setCounter (counter - 1);
    
    const handleReset = () =>setCounter (value);

    return(
         <>
       <h1>Counter App</h1>
        <p> { counter } </p>

        <button onClick={handleAdd}> +1 </button>
        <button onClick={handleSubs}> -1 </button>
        <button onClick={handleReset}> Reset </button>
        </>
       
    ) ;
 }
 
//se colocan al final
CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
   
}


