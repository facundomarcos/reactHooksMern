
const getGifs = async(categorie) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=vnZKO1CN6Q72ZkuJ33VVRWM44YO8NS7U&q=${categorie}&limit=20`;

    const resp = await fetch(url);

    const {data} = await resp.json();

    //console.log(data);

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    
    console.log(gifs);

}


export const GifGrid = ({categorie}) => {

   

    getGifs(categorie);

  return (
    <>
      <h3>{categorie}</h3>
     
      
    </>
  )
}

