'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';


if (document) {
	ReactDOM.render(
		<Root />,
		document.getElementById('root')
	);
}