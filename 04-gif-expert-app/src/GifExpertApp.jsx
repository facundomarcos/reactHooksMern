import { useState } from "react"
import { AddCategory } from "./components/AddCategory";




export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

    const onAddCategory = (newCategory) =>{
      //console.log(newCategory);
        //categories.push(newCategory);
      setCategories([ newCategory, ...categories ]);
      //setCategories(cat => [...cat, 'Valorant'])
    }

    console.log(categories);

  return (
    <>
    {/* titulo */}
      <h1>GifExpertApp</h1>


      {/* input */}
      <AddCategory 
        //setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      {/* listado */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        { categories.map(categorie => {
            return <li key={ categorie }>{categorie}</li>
        })}
       
      
      </ol>
         {/* gif item */}
    </>
  )
}


