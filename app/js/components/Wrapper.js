import React from 'react';

import TopToolbar from './TopToolbar';
import LeftToolbar from './LeftToolbar';
import SettingsPanel from './SettingsPanel';
import MainContent from './MainContent';

const Wrapper = () => {
	return (
		<bonaparte-toolbar id="main" data-position="top">
			<TopToolbar />
			<bonaparte-toolbar id="left-toolbar" data-position="left" data-open="false">
				<LeftToolbar />
				<div>
					<MainContent />
					<SettingsPanel />
				</div>
			</bonaparte-toolbar>
		</bonaparte-toolbar>
	);
};

export default Wrapper;