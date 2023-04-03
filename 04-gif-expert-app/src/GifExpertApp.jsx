import { useState } from "react"




export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch','Dragon Ball']);

    console.log(categories);

  return (
    <>
    {/* titulo */}
      <h1>GifExpertApp</h1>


      {/* input */}


      {/* listado */}
      <ol>
        { categories.map(categorie => {
            return <li key={ categorie }>{categorie}</li>
        })}
       
      
      </ol>
         {/* gif item */}
    </>
  )
}


