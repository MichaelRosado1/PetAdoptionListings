import React from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';
//app function
 const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <SearchParams />
    </div>
  )
};
//renders the app to the browser
render(<App />, document.getElementById('root'));
