import React, { useState } from 'react'

//import images Assets
import char_img_1 from '../../assets/images/char_1.png';
import char_img_2 from '../../assets/images/char_2.png';
import char_img_3 from '../../assets/images/char_3.jpg';
import char_img_4 from '../../assets/images/char_4.png';
import char_img_5 from '../../assets/images/char_5.png';
import char_img_6 from '../../assets/images/char_6.png';
import char_img_7 from '../../assets/images/char_7.jpg';

//import component
import CharacterCard from '../CharacterCard/CharacterCard';

//imports Home stylesheet
import './Home.css';

const Home = () => {
  let Characters = {
    character1: {
      name: 'Yashito',
      rank: 44,
      image: char_img_1,
      description: "Yashito is a legendary and dangerous Japanese samurai renowned for his unmatched skill in the art of combat. With a stoic demeanor and an unwavering resolve, he strikes fear into the hearts of his adversaries. Clad in traditional samurai armor, Yashito is a symbol of honor and lethal precision.",
      stats: {
        strength: "69",
        speed: "48",
        power: "85",
        technique: "32",
      },
      specialAbility: ['Blade of Fury', 'Swift Footwork', 'Ki Empowerment', 'Samurai`s Resilience']
    },
    character2: {
      name: 'Killer Hat',
      rank: 18,
      image: char_img_2,
      description: "The Killer Hat is an infamous and deadly entity that takes the form of a seemingly innocent hat. Donning an aura of malevolence, this cursed hat possesses an insatiable thirst for chaos and destruction. It radiates an eerie energy, drawing unsuspecting victims into its web of danger.",
      stats: {
        strength: 55,
        speed: 96,
        power: 75,
        technique: 25,
      },
      specialAbility: ['Soul Drain', 'Mind Warp', 'Toxic Emanation', 'Shadow Manipulation']
    },
    character3: {
      name: 'Megazord',
      rank: 24,
      image: char_img_3,
      description: "Megazord is a colossal robotic warrior created to defend the Earth against formidable threats. Standing tall and mighty, it combines the power of multiple individual machines, each piloted by skilled warriors. Megazord's sheer size and strength make it a force to be reckoned with, capable of devastating attacks and impressive defensive maneuvers.",
      stats: {
        strength: 48,
        speed: 96,
        power: 25,
        technique: 76,
      },
      specialAbility: ['Titanic Strike', 'Shield of Guardians', 'Mega Laser Blast', 'Rapid Transformations']
    },

    character4: {
      name: 'Scary Witch',
      rank: 37,
      image: char_img_4,
      description: "The Scary Witch is a mysterious and malevolent sorceress wielding dark magic. Cloaked in shadows, she possesses an uncanny ability to manipulate the forces of nature and cast potent spells. Her piercing gaze and wicked smile hide a sinister power that can bring about chaos and destruction.",
      stats: {
        strength: 66,
        speed: 47,
        power: 34,
        technique: 96,
      },
      specialAbility: ['Shadow Bolt', 'Cursed Hex', 'Summon Familiar', 'Ethereal Shroud'],
    },

    character5: {
      name: 'Skull Raider',
      rank: 59,
      image: char_img_5,
      description: "The Skull Raider is a cunning and relentless bounty hunter feared across the land. Clad in tattered armor adorned with bones, this merciless warrior stalks the shadows, always in pursuit of his targets. With a keen eye and lightning-fast reflexes, he strikes fear into the hearts of his enemies, leaving a trail of devastation in his wake.",
      stats: {
        strength: 42,
        speed: 69,
        power: 43,
        technique: 58,
      },
      specialAbility: ['Deadly Precision', 'Smoke Bomb', 'Poisoned Blades', 'Vanishing Strike'],
    },

    character6: {
      name: 'Bird Eye',
      rank: 68,
      image: char_img_6,
      description: "Bird Eye is a legendary archer known for her unparalleled accuracy and agility. With her trusty bow and keen eyesight, she can hit targets with pinpoint precision from great distances. Her swift and graceful movements make her a formidable opponent in both ranged and close combat. Bird Eye is a silent predator, striking her foes before they even realize she's there.",
      stats: {
        strength: 100,
        speed: 95,
        power: 68,
        technique: 75,
      },
      specialAbility: ['Eagle`s Gaze', 'Arrow Storm', 'Swift Retreat', 'Stealth Ambush'],
    },

    character7: {
      name: 'Lady Death',
      rank: 78,
      image: char_img_7,
      description: "Lady Death is a fearsome warrior with a thirst for battle and an unwavering determination. Clad in imposing armor, she wields a massive scythe that can cleave through anything in its path. Her relentless attacks strike fear into the hearts of her enemies, as she moves with unmatched grace and precision. Lady Death is a force to be reckoned with, embodying the inevitability of fate itself.",
      stats: {
        strength: 40,
        speed: 50,
        power: 90,
        technique: 60,
      },
      specialAbility: ['Reaper`s Embrace', 'Soul Harvest', 'Death`s Dance', 'Fate s Judgment'],
    }
  }
  const characterKeys = Object.keys(Characters);
  const [characterIndex, setCharacterIndex] = useState(0);

//callback function to get the data from the child
  const changeCard = () => {
    setCharacterIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % characterKeys.length;
      return nextIndex;
    });
  };

  const characterKey = characterKeys[characterIndex];
  const character = Characters[characterKey];

  return (
    <>
      <CharacterCard character={character} onClick={changeCard} />
    </>
  )
}

export default Home