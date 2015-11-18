import React from 'react';

import Menubar from './Menubar';
import Sidebar from './Sidebar';
import SettingsPanel from './SettingsPanel';
import MainContent from './MainContent';

const Wrapper = () => {
	return (
		<bonaparte-toolbar id="main" data-position="top">
			<Menubar />
			<bonaparte-toolbar id="left-toolbar" data-position="left" data-open="false">
				<Sidebar />
				<div>
					<MainContent />
					<SettingsPanel />
				</div>
			</bonaparte-toolbar>
		</bonaparte-toolbar>
	);
};

export default Wrapper;