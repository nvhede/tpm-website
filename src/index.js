import React from 'react';
import {render} from 'react-dom';


import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Shared Components
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

//Main Components
import Home from './components/Home';
import NotFound from './components/Not Found';


const router = (

)

render(router, document.getElementById('root'));
registerServiceWorker();