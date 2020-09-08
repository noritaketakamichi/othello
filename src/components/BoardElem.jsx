import React, { useEffect, useState } from 'react';
import Board from './Board';
import classNames from 'classnames';
import '../styles/styles.scss';

export default function BoardElem(props) {

    const array=props.arr;
	return (
		<>
        {array.map((elm)=>{
            const xposition=`xposition${elm[0]+1}`;
            const yposition=`yposition${elm[1]+1}`;
            return <div className={classNames("eachboard",xposition,yposition)}></div>
        })}
		</>
	);
}
