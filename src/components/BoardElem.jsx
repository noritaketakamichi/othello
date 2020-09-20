import React, { useEffect, useState, useContext } from 'react';
import Board from './Board';
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
		if (count % 2 == 0) {
			stoneColor = 'b';
			flag = true;
		} else {
			stoneColor = 'w';
		}

		//位置の配列&石の色
		const positionArr = [Number(classArr[1].slice(-1)), Number(classArr[2].slice(-1)), stoneColor];

		console.log('pppppppppppppppppp');
		console.log(positionArr);
		console.log(condition);

		//[新しい状況の配列、ひっくり返す石リスト]
		// const newCondition = calcCondition(positionArr, condition);

		// const res = await axios.get('api/condition/',{ condition: condition, position: positionArr })
		const res = await axios
			.post('api/condition/', { condition: condition, position: positionArr })

		const newCondition = res.data;
		console.log(newCondition);
		if (newCondition) {
			//set new condition
			setCondition(newCondition.condition);

			//add stone
			setStones([...stones, ...newCondition.changeStoneList]);

			setCount(count + 1);

			if (flag) {
				//白盤はCPU
				//置ける位置一覧
				// const puttableArray = cpuCalc(newCondition[0]);
				// console.log('puttable');
				// console.log(puttableArray);
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
