import React, { useEffect, useState, useContext } from 'react';
import Board from './Board';
import Stone from './Stone';
import Guide from './Guide';
// import OthelloContext from '../OthelloContext';
import '../styles/styles.scss';
// import { OthelloContext } from '../../othelloContext';

const OthelloContext = React.createContext();
export const useOthello = () => useContext(OthelloContext);

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

	useEffect(() => {
		//終了時に計算
		const ShowResult = () => {
			let blackStones = 0;
			for (let array of condition) {
				for (let elm of array) {
					if (elm === 'b') {
						blackStones++;
					} else if (elm === '-') {
						//空きコマがあったら中止
						return;
					}
				}
			}
			let message;
			if (blackStones > 32) {
				message = 'You win!!';
			} else if (blackStones === 32) {
				message = 'Draw!!';
			} else {
				message = 'You lose!!';
			}
			alert(`black:${blackStones},white:${64 - blackStones}   ${message}`);
		};
		ShowResult();
	}, [condition]);

	return (
		<div className="board">
			<OthelloContext.Provider value={{ condition, setCondition, stones, setStones, count, setCount }}>
				<Stone />
				<Board />
				{/* <Guide /> */}
			</OthelloContext.Provider>
		</div>
	);
}
