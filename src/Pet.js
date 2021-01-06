import React from 'react';

//normal function
//destructoring the object passed into the function
export default function Pet ({ name, animal, breed }) {
  //returns a segment of html enclosed in a div
//   return React.createElement("div", {}, [
//     //creates h1 tag with name, breed, and animal properties
//     //very similar to an array of elements
//     React.createElement("h1", {}, name),
//     React.createElement("h1", {}, breed),
//     React.createElement("h1", {}, animal),
//   ]);

    return (
        <div>
            <h1>{name}</h1>
            <h2>{animal}</h2>
            <h3>{breed}</h3>
        </div>
    )
};
