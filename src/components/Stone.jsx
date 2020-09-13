import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import '../styles/styles.scss';

export default function Stone(props) {
	// const array = props.array;



	return (
		<>
			{props.stones.map((stone) => {
				const xposition = `xposition${stone[0]}`;
				const yposition = `yposition${stone[1]}`;
				const condition = `condition${stone[2]}`;
				return <div className={classNames('eachstone', xposition, yposition, condition)}></div>;
			})}
		</>
	);
}
