import React from 'react';
import RandomizerDisplay from './RandomizerDisplay';
import Randomizer from './Randomizer';

export default function RandomizerContainer(props) {
    return (
        <section id='randomizer-container'>
            <RandomizerDisplay
                lockedInValues={props.lockedInValues}
                displayedCharaValues={props.displayedCharaValues}
            />
            <Randomizer
                lockedInValues={props.lockedInValues}
                setDisplayedCharaValues={props.setDisplayedCharaValues}
            />
        </section>
    );
}