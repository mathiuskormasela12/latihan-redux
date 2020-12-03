import React from 'react';
import './App.css';
import Counter from './Counter';
import store from './store';

export default function App() {
	return(
		<div className="App">
			<h1>Latihan Redux</h1>
			<Counter store={ store } />
		</div>
	);
}
