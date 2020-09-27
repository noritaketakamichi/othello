import React from 'react';
import BoardElem from './BoardElem';
import '../styles/styles.scss';
import {useOthello} from './App';

export default function Board(props) {
	// const [clickPosition, setClickPosition] = useState([]);

	// const array=props.array;

	const {condition} = useOthello();

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
