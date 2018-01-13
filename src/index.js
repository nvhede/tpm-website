import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Shared Components
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
//Loading component here

//Store

const Application = () => {
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	)
}

render(<Application />, document.getElementById('root'));
registerServiceWorker();