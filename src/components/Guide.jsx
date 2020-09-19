import React, { useEffect, useState,useContext } from 'react';
import classNames from 'classnames';
import '../styles/styles.scss';
import {useOthello} from './App';

export default function Guide(props) {
    const {count} = useOthello();
    let text;
    let guideColor;
	if (count % 2 == 0) {
        text = '黒番';
        guideColor='guideBlack'
	} else {
        text = '白番';
        guideColor='guideWhite'
    }
    


	return (
		<div className="guide">
			<p className={classNames('guideText', guideColor)}>{text}</p>
		</div>
	);
}
