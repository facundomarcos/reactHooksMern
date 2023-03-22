

const getImagen = async() =>{

try {
        //return 'https://asdfasdfa.com';
        const apiKey = 'vnZKO1CN6Q72ZkuJ33VVRWM44YO8NS7U';

        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
       const {data} = await resp.json();
       
       const {url} = data.images.original;
       
       const img = document.createElement('img');
       img.src = url;
       document.body.append(img);
} catch (error) {
    //manejo del error
    console.error(error)
}



}



getImagen();






