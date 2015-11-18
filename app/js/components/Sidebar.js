import React from 'react';

const Sidebar = () => {
	return (
		<aside>
			<div className="buttons">
				<bonaparte-button class="ui icon button labeled marginless transparent" 
					data-action="click"
					data-target="#settings-panel"
					data-target-open="true"
					data-toggle="open">
						<i className="tune icon"></i>
						Project Settings
				</bonaparte-button>
			</div>
			<div className="buttons">
				<bonaparte-button class="ui icon button labeled marginless transparent" 
					data-action="click"
					data-target="#left-toolbar"
					data-target-open="true"
					data-toggle="open">
						<i className="help-outline icon"></i>
						Help
				</bonaparte-button>
			</div>
		</aside>
	);
};

export default Sidebar;