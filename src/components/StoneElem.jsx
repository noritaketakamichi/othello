import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import '../styles/styles.scss';
import { calcCondition } from '../calculate.js';

export default function StoneElem(props) {
	//オセロ盤の横長長方形のコンポーネントである
	const array = props.arr;
	const condition = props.condition;

	const clicked = (e) => {
		const classArr = e.target.className.split(' ');

		//位置の配列
		const positionArr = [Number(classArr[1].slice(-1)), Number(classArr[2].slice(-1))];
		console.log(positionArr);
		console.log(condition);
		console.log(calcCondition(positionArr,condition));
	};

	return (
		<>
			{array.map((elm) => {
				const xposition = `xposition${elm[0]}`;
				const yposition = `yposition${elm[1]}`;
				const condition = `condition${elm[2]}`;
				const id = `${elm[0]}${elm[1]}`;
				return (
					<div className={classNames('eachstone', xposition, yposition, condition)} onClick={clicked}></div>
				);
			})}
		</>
	);
}
