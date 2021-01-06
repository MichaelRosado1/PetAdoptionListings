//import react
import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

//declare an arrow function called SearchParams
const SearchParams = () => {
    //destructuring the usestate object
    //first item is always state and second is updater function
    const [location, setLocation] = useState("Chicago, IL");
    const [animal, setAnimal] = useState("dog");
    const [breed, setBreed] = useState("");
    const [breeds, setBreeds] = useState([]);

    //return the html elements to display
    return (
        <div className="search-params"> 
        <h1>{location}</h1>
            <form>
                <label htmlFor="location">
                    location
                    <input
                    id="location"
                    placeholder="Location" 
                    value={location}
                    onChange={ e => setLocation(e.target.value)}/>   
                </label>    
                <label htmlFor="animal">
                    animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={e => setAnimal(e.target.value)}
                        onBlur={e => setAnimal(e.target.value)}>
                        <option>All</option>
                    </select>
                </label>
                <label htmlFor="breed">
                    breed
                    <select
                        id="breed"
                        value={breed}
                        onChange={e => setBreed(e.target.value)}
                        onBlur={e => setBreed(e.target.value)}
                        disabled={!breeds.length}
                        >
                            <option>All</option> 
                            {breeds.map(breedString => (<option key={breedString} value={breedString}>
                                {breedString}
                            </option>))}
                        </select>
                </label>
                <button>Submit</button>
            </form> 
        </div>
    )
}

//if no specific functions are 'requested' export the entire class
export default SearchParams;