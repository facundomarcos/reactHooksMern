
import { getGifs } from "../helpers/getGifs";


export const GifGrid = ({categorie}) => {

   

    getGifs(categorie);

  return (
    <>
      <h3>{categorie}</h3>
     
      
    </>
  )
}

