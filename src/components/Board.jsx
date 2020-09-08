import React, { useEffect, useState } from 'react';
import BoardElem from './BoardElem';
import '../styles/styles.scss';

export default function Board(props) {
	// const [stones, setStones] = useState([]);

	const array=props.array;
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
