import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import { render } from 'react-dom';
import SearchParams from './SearchParams';
import { Link, Router } from "@reach/router";
import Details from './Details';
import useDropdown from './useDropdown';
import pet, { ANIMALS } from "@frontendmasters/pet";

//app function
 const App = () => {
  const [breeds, updateBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, updateBreed] = useDropdown("Breed", "", breeds);
  const themeHook = useState("darkblue");
  const choiceHook = useState({
    currentAnimal:animal,
    currentBreed:breed 
  });


  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
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
      </ThemeContext.Provider>
    </React.StrictMode>
  )
};
//renders the app to the browser
render(<App />, document.getElementById('root'));
