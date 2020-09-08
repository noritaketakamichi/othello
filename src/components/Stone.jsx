import React, { useEffect, useState } from 'react';
import StoneElem from './StoneElem';
import '../styles/styles.scss';

export default function Stone(props) {
	const array = props.array;

	return (
		<div className="flame">
			<div className="board">
				{array.map((arr) => {
					return <StoneElem arr={arr} />;
				})}
			</div>
		</div>
	);
}
