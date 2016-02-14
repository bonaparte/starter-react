import React from 'react';

const white = {
	color: "#fff"
}

const TopToolbar = () => {
	return (
		<aside className="dark">
			<div className="ui block" style={ white }>Bonaparte Starter React</div>
			<a className="ui icon button marginless transparent" href="https://github.com/bonaparte/starter-react" target="_blank"><i className="github icon"></i></a>
		</aside>
	);
};

export default TopToolbar;