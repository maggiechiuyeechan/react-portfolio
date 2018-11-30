import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './mainPage';

class App extends React.Component {
  render() {
    return (
      <div>Hello</div>
    )
  }
}

ReactDOM.render(<AppRouter />, document.getElementById('app'));
