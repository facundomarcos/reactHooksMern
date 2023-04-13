



export const GifGrid = ({categorie}) => {

    const gifs = [1,2,3,4]

  return (
    <div>
      <h3>{categorie}</h3>
      {
        gifs.map( gif => (
            <p>{gif}</p>
        ))
      }
      
    </div>
  )
}

