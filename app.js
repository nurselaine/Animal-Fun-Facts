import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';
const title = '';
const background = <img className='background' src='/images/ocean.jpg' alt='ocean' />
let showBackground = true;



const displayFact = (e) => {

    const animalFactNumber = Math.floor(Math.random() * animals[e.target.alt].facts.length);

    const selectedAnimal = e.target.alt;
    const animalFact = (animals[selectedAnimal].facts[animalFactNumber]);
    document.getElementById('facts').innerHTML = animalFact;
    console.log(animalFact);

    showBackground = !showBackground;
    // if (showBackground == false){
    // background = '';
    // }

}

const images = [];
for (const animal in animals) {
    images.push(
        <img
            key={animal}
            className='animal'
            alt={animal}
            src={animals[animal].image}
            ariaLabel={animal}
            role='button'
            onClick={displayFact}

        />
    )
};

const animalFacts = (
    <div>
        <h1>
            { (title == '') ? 'Click an animal for a fun fact!' : title }
        </h1>
        {background}
        <div className='animals'>
            <h2> <p id='facts'> </p> </h2>
            {images}
        </div>
    </div>);

ReactDOM.render(animalFacts, document.getElementById("root"));