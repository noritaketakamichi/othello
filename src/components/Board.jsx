import React, { useEffect, useState,useContext } from 'react';
import BoardElem from './BoardElem';
import '../styles/styles.scss';
import {useOthello} from './App';

export default function Board(props) {
	// const [clickPosition, setClickPosition] = useState([]);

	// const array=props.array;

	const {condition} = useOthello();

	console.log(condition);

	return (
		<>
			{condition.map((arr,index) => {
				return (
					<BoardElem
						yPos={index}
						arr={arr}
					/>
				);
			})}
		</>
	);
}
