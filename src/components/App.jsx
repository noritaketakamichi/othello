import React, { useEffect, useState } from 'react';
import Board from './Board';
import Stone from './Stone';
// import '../styles/styles.scss';

export default function App() {

	const array = [];
	for (let row = 0; row < 8; row += 1) {
		array.push([]);
		for (let col = 0; col < 8; col += 1) {
			array[row].push([row, col, '-']);
		}
	}
	
	const setInitialCondition = function () {
		const array = [];
		for (let row = 0; row < 8; row += 1) {
			array.push([]);
			for (let col = 0; col < 8; col += 1) {
				array[row].push([row, col, '-']);
			}
		}

		array[3][3][2] = 'w';
		array[3][4][2] = 'b';
		array[4][3][2] = 'b';
		array[4][4][2] = 'w';
		return array;
	};

	
	useEffect(() => {
		setCondition(setInitialCondition())
	}, []);

	const [condition, setCondition] = useState(array);

	return (
		<>
			<Board array={condition} />
			<Stone array={condition} />
		</>
	);
}
