//import react
import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

//declare an arrow function called SearchParams
const SearchParams = () => {
    //destructuring the usestate object
    //first item is always state and second is updater function
    const [location, setLocation] = useState("Chicago, IL");
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS); 
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
    const [breeds, setBreeds] = useState([]);

    //runs whenever breed changes
    useEffect(() => {
        setBreeds([]);
        setBreed("");

        pet.breeds(animal).then(({ breeds }) => {
            const breedStrings = breeds.map(({ name}) => name);
            setBreeds(breedStrings);
        }, console.error)
    }, [animal, setBreed, setBreeds]);

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