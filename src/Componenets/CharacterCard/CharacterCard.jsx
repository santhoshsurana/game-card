import React, { useEffect, useState } from 'react'


//imports Characters card Stylesheet
import '../CharacterCard/CharacterCard.css'

const CharacterCard = ({ character, onClick }) => {
  const [fade, setFade] = useState(true);
  const handleClick = () => {
    onClick();
    setFade(false)
  };

  useEffect(() => {
    setFade(true); // Reset fade to true on every render
  }, [fade]); 

  return (
    <div onClick={handleClick} className={`characterCard ${ fade ? ' animate-fadeIn':' animate-fadeOut'}`}>
      <div className="flex flex-row mb-4 justify-between">
        <h2 className='md:-ml-8 -ml-4 py-2 px-8 rounded-r-3xl bg-zinc-50 hover:bg-zinc-950'><span className='title'>{character.name}</span></h2>
        <h2 className='p-2'><span className='rank'>{character.rank}</span></h2>
      </div>


      <div className="card z-10 ">
        <div className="card-inner">
          <div className="card-front">
            <img
              src={character.image}
              alt={character.name}
              className={`character`}
            />
          </div>
          <div className="card-back">
            <h3 className="text-lg text-zinc-200 font-Bebas tracking-wide font-semibold mt-4"><span className="bg-zinc-950 p-2">Statestics</span></h3>
            <ul className="mt-2 ">
              <li>Strength: <span className='w-full h-2 bg-amber-50'></span>{character.stats.strength}</li>
              <li>speed: {character.stats.speed}</li>
              <li>power: {character.stats.power}</li>
              <li>technique: {character.stats.technique}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="md:mt-[21rem] lg:mt-96 mt-80 p-4 z-20 bg-zinc-700 font-Bebas  rounded-xl text-zinc-50">
      <h3 className="text-lg text-zinc-200 mt-8 font-semibold tracking-wider "><span className="bg-zinc-950 p-2">Description :</span></h3>
        <p className=" font-Antonio mt-4 tracking-wide"> {character.description}</p>
        <h3 className="text-lg text-zinc-200 font-semibold tracking-wider mt-4"><span className="bg-zinc-950 p-2">Special Abilities :</span></h3>
        <ul className="flex flex-wrap mt-4">
          {character.specialAbility.map((item, index) => (
            <li key={index} className='ability'>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CharacterCard