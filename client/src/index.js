import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './modules/redux/store';
import {Provider} from 'react-redux';
import ModalContainer from './modules/ModalContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<ModalContainer />
		<App />
	</Provider>
);
