import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import '../styles/styles.scss';

export default function Guide(props) {
    let text;
    let guideColor;
	if (props.count % 2 == 0) {
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
