import React from 'react';


// Components
import Header from './shared/Header';
import Footer from './shared/Footer';
import Sidebar from './shared/Sidebar';
import Routes from './shared/Routes';



const App = () => {
	return (
		<div>
			<Header />
			{/* <Sidebar /> */}
			<Routes />
			{/* <Footer /> */}
		</div>
	)
}

export default App;
