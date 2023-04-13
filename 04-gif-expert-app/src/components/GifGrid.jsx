
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const GifGrid = ({categorie}) => {

   const [counter, setCounter] = useState(10);

   useEffect( () => {
    getGifs(categorie);
   }, [])

    getGifs(categorie);

  return (
    <>
      <h3>{categorie}</h3>
     
     <h5>{counter}</h5>
     <button onClick={ () => setCounter(counter + 1)}>+1</button>
      
    </>
  )
}

