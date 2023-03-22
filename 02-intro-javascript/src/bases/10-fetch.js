//https://developer.mozilla.org/es/docs/Web/API/Fetch_API
//https://developers.giphy.com/


const apiKey = 'vnZKO1CN6Q72ZkuJ33VVRWM44YO8NS7U';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then(resp => {
//     //console.log(resp)
//     resp.json().then(data => {
//         console.log(data)
//     });
// })

//promesa en cadena
peticion
    .then(resp => resp.json())
    .then( ({ data }) =>{
       const {url} = data.images.original;

       const img = document.createElement('img');
       img.src = url;

       document.body.append(img);
    })
.catch(console.warn);











