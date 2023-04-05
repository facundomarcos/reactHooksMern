import { useState } from "react"




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


