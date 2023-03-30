import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { First } from './FirstApp';
import {App} from './HelloWordApp';
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <First title="Hola, soy Vegeta"/>
        {/* <CounterApp value={10}/> */}
    </React.StrictMode>
)


//title="Hola, soy Goku"





