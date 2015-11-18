import React from 'react';

const SettingsPanel = () => {
	return (
		<bonaparte-panel class="panel" id="settings-panel" data-position="left" data-open="false">
			<bonaparte-scroll>
				<bonaparte-content>
					<h4>Project Settings</h4>
				</bonaparte-content>
			</bonaparte-scroll>
		</bonaparte-panel>
	);
};

export default SettingsPanel;