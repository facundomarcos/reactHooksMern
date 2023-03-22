import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { First } from './FirstApp';
import {App} from './HelloWordApp';
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App/> */}
        <First title="Hola" subTitle={123}/>
    </React.StrictMode>
)


//title="Hola, soy Goku"





