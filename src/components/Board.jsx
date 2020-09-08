import React, { useEffect, useState } from 'react';
import '../styles/styles.scss';

export default function Board() {

	return (
		<div className="flame">
		<div className="board">
			<div className="h-One line"></div>
			<div className="h-Two line"></div>
			<div className="h-Three line"></div>
			<div className="h-Four line"></div>
			<div className="h-Five line"></div>
			<div className="h-Six line"></div>
			<div className="h-Seven line"></div>

            <div className="v-One line"></div>
            <div className="v-Two line"></div>
            <div className="v-Three line"></div>
            <div className="v-Four line"></div>
            <div className="v-Five line"></div>
            <div className="v-Six line"></div>
            <div className="v-Seven line"></div>


		</div>
		</div>
	);
}