import React, { useState } from 'react';
import CharacteristicListDisplay from './CharacteristicListDisplay';
import CharacteristicListSelector from './CharacteristicListSelector';

export default function CharacteristicsContainer(props) {
    const [listSelectorValue, setListSelectorValue] = useState('race');

    return (
        <section id='characteristic-container'>
            <CharacteristicListDisplay
                listSelectorValue={listSelectorValue}
                lockedInValues={props.lockedInValues}
                setLockedInValues={props.setLockedInValues}
                displayedCharaValues={props.displayedCharaValues}
                setDisplayedCharaValues={props.setDisplayedCharaValues}
            />
            <CharacteristicListSelector
                listSelectorValue={listSelectorValue}
                setListSelectorValue={setListSelectorValue}
            />
        </section>
    );
}