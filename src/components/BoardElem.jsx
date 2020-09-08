import React, { useEffect, useState } from 'react';
import Board from './Board';
import classNames from 'classnames';
import '../styles/styles.scss';

export default function BoardElem(props) {
	//オセロ盤の横長長方形のコンポーネントである
	const array = props.arr;
	const condition = props.condition;

	const clicked = (e) => {
		const classArr = e.target.className.split(' ');

		//位置の配列
		const positionArr = [Number(classArr[1].slice(-1)), Number(classArr[2].slice(-1))];
		console.log(positionArr);
		console.log(condition);
		console.log('hello');
	};

	return (
		<>
			{array.map((elm) => {
				const xposition = `xposition${elm[0]}`;
				const yposition = `yposition${elm[1]}`;
				const id = `${elm[0]}${elm[1]}`;
				return <div className={classNames('eachboard', xposition, yposition)} onClick={clicked}></div>;
			})}
		</>
	);
}
