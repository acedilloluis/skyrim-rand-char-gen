import React from 'react';
import CharacteristicValueCell from './CharacteristicValueCell';
import CHARACTERDATA from './Data';

export default function CharacteristicListDisplay(props) {
    // Create list of characteristic values and their lock in value buttons for user selected characteristic
    const characteristicValuesList = Object.entries(CHARACTERDATA[props.listSelectorValue]).map(([charaKey, charaValue]) =>
        <CharacteristicValueCell
            characteristic={props.listSelectorValue}
            characteristicKey={charaKey}
            characteristicValue={charaValue}
            lockedInValues={props.lockedInValues}
            setLockedInValues={props.setLockedInValues}
            displayedCharaValues={props.displayedCharaValues}
            setDisplayedCharaValues={props.setDisplayedCharaValues}
            key={charaKey}
        />
    );

    return (
        <div id='chara-list-display'>
            {characteristicValuesList}
        </div>
    );
}