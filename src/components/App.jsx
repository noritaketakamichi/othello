import React, { useEffect, useState } from 'react';
import Board from './Board';
import Stone from './Stone';
// import '../styles/styles.scss';

export default function App() {
	// const initialStones = [];
	// for (let i = 0; i < 8; i++) {
	// 	initialStones.push([]);
	// 	for (let j = 0; j < 8; j++) {
	// 		initialStones[i].push([]);
	// 	}
	// }

	const arr = [1, 2, 3];
	const array = [];
	for (let row = 0; row < 8; row += 1) {
		array.push([]);
		for (let col = 0; col < 8; col += 1) {
			array[row].push([row,col,"-"]);
		}
	}

	array[3][3][2] = 'w';
	array[3][4][2] = 'b';
	array[4][3][2] = 'b';
	array[4][4][2] = 'w';

	// const [stones, setStones] = useState(initialStones);

	return (
		<>
			<Board array={array}/>
			<Stone array={array} />
		</>
	);
}
