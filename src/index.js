import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimateSharedLayout } from 'framer-motion';
import 'typeface-nunito-sans'
import 'typeface-anton'

ReactDOM.render(
	<React.StrictMode>
		<AnimateSharedLayout type="crossfade">
			<Router>
				<App />
			</Router>
		</AnimateSharedLayout>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
