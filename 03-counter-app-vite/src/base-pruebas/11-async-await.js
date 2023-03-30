
export const getImagen = async() => {

    try {

        const apiKey = 'vnZKO1CN6Q72ZkuJ33VVRWM44YO8NS7U';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        console.error(error);
        return 'No se encontró la imagen';
    }
    
    
    
}





