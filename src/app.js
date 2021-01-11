import React from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';
import { Link, Router } from "@reach/router";
import Details from './Details';
//app function
 const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">
            <h1 id="something-important">Adopt Me!</h1>
          </Link>
        </header>
       <Router>
          <SearchParams path="/" />
          <Details path="/details/1" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
 )
};
//renders the app to the browser
render(<App />, document.getElementById('root'));
