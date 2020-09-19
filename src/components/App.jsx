import React, { useEffect, useState } from 'react';
import Board from './Board';
import Stone from './Stone';
import Guide from './Guide';
import '../styles/styles.scss';

export default function App() {
	//盤の石の状況
	const [condition, setCondition] = useState([
		['-', '-', '-', '-', '-', '-', '-', '-'],
		['-', '-', '-', '-', '-', '-', '-', '-'],
		['-', '-', '-', '-', '-', '-', '-', '-'],
		['-', '-', '-', 'b', 'w', '-', '-', '-'],
		['-', '-', '-', 'w', 'b', '-', '-', '-'],
		['-', '-', '-', '-', '-', '-', '-', '-'],
		['-', '-', '-', '-', '-', '-', '-', '-'],
		['-', '-', '-', '-', '-', '-', '-', '-'],
	]);

	//置いた石のリスト[x,y,色,何手目]
	const [stones, setStones] = useState([
		[3, 3, 'b', 0],
		[3, 4, 'w', 0],
		[4, 4, 'b', 0],
		[4, 3, 'w', 0],
	]);

	const [count, setCount] = useState(0);

	return (
		<div className="board">
			<Stone condition={condition} stones={stones} setCondition={setCondition} />
			<Board
				condition={condition}
				setCondition={setCondition}
				stones={stones}
				setStones={setStones}
				count={count}
				setCount={setCount}
			/>
			<Guide count={count} />
		</div>
	);
}
