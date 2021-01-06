import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';
//app function
 const App = () => {
//   return React.createElement(
//     "div",
//     //gives the div an id of 'something-important'
//     { id: "something-important" },
//     [
//       React.createElement("button", { onClick: "Poke(fetchMovie())" }),
//       //creates an element that says adopt me
//       React.createElement("h1", {}, "adopt me"),
//       //creates a pet component
//       React.createElement(Pet, {
//         name: "Odie",
//         animal: "dog",
//         breed: "yorkie",
//       }),
//       React.createElement(Pet, {
//         name: "Herbert",
//         animal: "monke",
//         breed: "monke",
//       }),
//       React.createElement,
//     ]
//   );
  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <Pet name="luna" animal="dog" breed="something"></Pet>
      <Pet name="Hubert" animal="monke" breed="monke"></Pet>
      <Pet name="Odie" animal="dog" breed="yorkie"></Pet>
    </div>
  )
};
//renders the app to the browser
render(<App />, document.getElementById('root'));
