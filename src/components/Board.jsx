import React, { useEffect, useState } from 'react';
import BoardElem from './BoardElem';
import '../styles/styles.scss';

export default function Board(props) {
	// const [clickPosition, setClickPosition] = useState([]);

	// const array=props.array;

	console.log(props.condition);

	return (
		<>
			{props.condition.map((arr) => {
				return (
					<BoardElem
						arr={arr}
						condition={props.condition}
						setCondition={props.setCondition}
						stones={props.stones}
						setStones={props.setStones}
						count={props.count}
						setCount={props.setCount}
					/>
				);
			})}
		</>
	);
}
