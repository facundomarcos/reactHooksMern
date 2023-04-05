import { useState } from "react"
import { AddCategory } from "./components/AddCategory";




export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

    const onAddCategory = () =>{
       // categories.push('Valorant');
      setCategories([ 'Valorant', ...categories ]);
      //setCategories(cat => [...cat, 'Valorant'])
    }

    console.log(categories);

  return (
    <>
    {/* titulo */}
      <h1>GifExpertApp</h1>


      {/* input */}
      <AddCategory />

      {/* listado */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        { categories.map(categorie => {
            return <li key={ categorie }>{categorie}</li>
        })}
       
      
      </ol>
         {/* gif item */}
    </>
  )
}


