import React, {  useState, useContext } from 'react';
import Board from './Board';
import Stone from './Stone';
import Guide from './Guide';
// import OthelloContext from '../OthelloContext';
import '../styles/styles.scss';
// import { OthelloContext } from '../../othelloContext';

const OthelloContext = React.createContext();
export const useOthello= () => useContext(OthelloContext)

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

	// const [state, setState, error, loading, setPokemonId, pokemonId] = useContext(
	// 	PokedexContext
	//   );

	return (
		<div className="board">
			<OthelloContext.Provider value={{condition, setCondition, stones, setStones, count, setCount}}>
				<Stone />
				<Board />
				<Guide />
			</OthelloContext.Provider>
		</div>
	);
}
