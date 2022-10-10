import React, { useState } from 'react';
import CharacteristicsContainer from './components/CharacteristicsContainer';
import RandomizerContainer from './components/RandomizerContainer';

function App() {
  // Used in Randomizer and Lock in Value
  const [lockedInValues, setLockedInValues] = useState({
    race: [],
    skill: [],
    faction: [],
    follower: []
  });
  // Used in Randomizer Display, Randomizer, Lock In Value
  const [displayedCharaValues, setDisplayedCharaValues] = useState(
    {
      race: ['Altmer'],
      skill: ['Alchemy', 'Alteration', 'Archery'],
      faction: ['Bards College'],
      follower: ['Assassin']
    }
  );

  return (
    <>
      <RandomizerContainer
        lockedInValues={lockedInValues}
        displayedCharaValues={displayedCharaValues}
        setDisplayedCharaValues={setDisplayedCharaValues}
      />
      <CharacteristicsContainer
        lockedInValues={lockedInValues}
        setLockedInValues={setLockedInValues}
        displayedCharaValues={displayedCharaValues}
        setDisplayedCharaValues={setDisplayedCharaValues}
      />
    </>
  );
}
export default App;