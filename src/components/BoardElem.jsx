import React from 'react';
import classNames from 'classnames';
import '../styles/styles.scss';
// import { calcCondition } from '../calculate.js';
// import { cpuCalc } from '../cpuCalc.js';
import { useOthello } from './App';
import axios from 'axios';

export default function BoardElem(props) {
	//オセロ盤の横長長方形のコンポーネントである

	const { count, setCount, condition, setCondition, stones, setStones } = useOthello();

	const clicked = async (e) => {
		const classArr = e.target.className.split(' ');
		console.log('------------------');

		//CPUが計算する必要がある場合フラグが立つ
		let flag = false;
		let stoneColor;
		if (count % 2 === 0) {
			stoneColor = 'b';
			flag = true;
		} else {
			stoneColor = 'w';
		}

		//位置の配列&石の色
		const positionArr = [Number(classArr[1].slice(-1)), Number(classArr[2].slice(-1)), stoneColor];

		const resApiCondition = await axios
			.post('api/condition/', { condition: condition, position: positionArr })

		const newCondition = resApiCondition.data;
		console.log(newCondition);
		if (newCondition) {
			//set new condition
			setCondition(newCondition.condition);
			console.log(newCondition.condition);

			//add stone
			const stoneList=[...stones, ...newCondition.changeStoneList]
			setStones(stoneList);

			setCount(count + 1);

			if (flag) {
				//白盤はCPU
				//置ける位置一覧
				const resApiAuto = await axios
				.post('api/auto/', { condition: newCondition.condition, color: "w" })

				const puttableArray = resApiAuto.data.positionList;

				//次の一手をランダムに計算
				const nextPosition=puttableArray[Math.floor(Math.random()*puttableArray.length)];

				//ランダムに選んだ手を打つ
				const resApiNextCondition = await axios
				.post('api/condition/', { condition: newCondition.condition, position: [...nextPosition,"w"] })

				setCondition(resApiNextCondition.data.condition);
				console.log(resApiNextCondition.data.condition);

				//add stone
				const NextStoneList=[...stones, ...newCondition.changeStoneList,...resApiNextCondition.data.changeStoneList];
				setStones(NextStoneList);
	
				setCount(count + 2);

			}
		}
	};

	return (
		<>
			{props.arr.map((elm, index) => {
				const xposition = `xposition${index}`;
				const yposition = `yposition${props.yPos}`;
				return <div className={classNames('eachboard', xposition, yposition)} onClick={clicked}></div>;
			})}
		</>
	);
}
