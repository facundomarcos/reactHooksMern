import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";




export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) =>{

      if( categories.includes(newCategory)  ) return;
      
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
  
        { categories.map( (categorie) => 
                    (
              <GifGrid key={categorie} categorie={categorie}/>
              // <div key={ categorie }>
              //   <h3>{categorie}</h3>
              //   <li >{categorie}</li>
              // </div>
            )
        )
        }
       
      
    
    </>
  )
}


