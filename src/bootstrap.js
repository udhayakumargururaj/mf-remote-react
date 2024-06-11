import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

const App = () => (
  <div>
    <h1>Remote App</h1>
    <Button />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
