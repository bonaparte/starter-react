import '../css/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './components/Wrapper';

class App extends React.Component {
	render() {
		return <Wrapper/>;
	}
}

ReactDOM.render(<App/>, document.getElementById('wrapper'));