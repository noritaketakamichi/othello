import React, { useEffect, useState } from 'react';
import BoardElem from './BoardElem';
import '../styles/styles.scss';

export default function Board(props) {
	// const [stones, setStones] = useState([]);

	const arr = [1, 2, 3];
	const array = [];
	for (let row = 0; row < 8; row += 1) {
		array.push([]);
		for (let col = 0; col < 8; col += 1) {
			array[row].push([row,col]);
		}
	}

	return (
		<>
			<div className="flame">
				<div className="board">
					{array.map((arr) => {
						return<BoardElem arr={arr}/>
					})}
				</div>
			</div>
		</>
	);
}
