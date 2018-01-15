import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Shared Components
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

//Loading component here

//Store
import store, { history } from './store';

const Application = () => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<App />
			</ConnectedRouter>
		</Provider>
	)
}

render(<Application />, document.getElementById('root'));
registerServiceWorker();