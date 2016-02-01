import React from 'react';

import TopToolbar from './TopToolbar';
import LeftToolbar from './LeftToolbar';
import SettingsPanel from './SettingsPanel';
import MainContent from './MainContent';

const style = {
	height: "100%"
};

const Wrapper = () => {
	return (
		<bonaparte-toolbar id="main" class="small" data-position="top" style={style}>
			<TopToolbar />
			<bonaparte-toolbar id="left-toolbar" data-position="left" data-open="false">
				<LeftToolbar />
				<MainContent />
			</bonaparte-toolbar>
		</bonaparte-toolbar>
	);
};

export default Wrapper;