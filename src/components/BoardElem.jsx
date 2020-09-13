import React, { useEffect, useState } from 'react';
import Board from './Board';
import classNames from 'classnames';
import '../styles/styles.scss';
import { calcCondition } from '../calculate.js';

export default function BoardElem(props) {
	//オセロ盤の横長長方形のコンポーネントである

	const clicked = (e) => {
		const classArr = e.target.className.split(' ');
		console.log("------------------");

		let stoneColor;
		if(props.count%2==0){
			stoneColor="b"
		}else{
			stoneColor="w"
		}

		//位置の配列&石の色
		const positionArr = [Number(classArr[1].slice(-1)), Number(classArr[2].slice(-1)),stoneColor];

		const newCondition = calcCondition(positionArr, props.condition);
		if (newCondition) {
			//set new condition
			props.setCondition(newCondition[0]);

			//add stone
			props.setStones([...props.stones,...newCondition[1]]);

			props.setCount(props.count+1)
		}
	};

	return (
		<>
			{props.arr.map((elm) => {
				const xposition = `xposition${elm[0]}`;
				const yposition = `yposition${elm[1]}`;
				const id = `${elm[0]}${elm[1]}`;
				return <div className={classNames('eachboard', xposition, yposition)} onClick={clicked}></div>;
			})}
		</>
	);
}
