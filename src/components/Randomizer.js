import React from 'react';
import CHARACTERDATA from './Data';

export default function Randomizer(props) {
    // Create deep copy of locked in values
    const updatedDispCharaValues = JSON.parse(JSON.stringify(props.lockedInValues));
    const characteristicKeys = Object.keys(updatedDispCharaValues);

    function handleClick() {
        // Will give random characteristic values for characteristics that don't have locked in values
        for (const characteristic of characteristicKeys) {
            fillDispCharaValues(characteristic);
        }
        props.setDisplayedCharaValues(updatedDispCharaValues);
    }

    function fillDispCharaValues(characteristic) {
        characteristic === 'skill'
            ? genRandCharaValues(characteristic, 3)
            : genRandCharaValues(characteristic, 1);
    }

    function genRandCharaValues(characteristic, size) {
        const characteristicKeys = Object.keys(CHARACTERDATA[characteristic]);
        let randCharaValue = '';

        if (characteristic === 'skill') {
            let isDuplicate = false;
            while (updatedDispCharaValues[characteristic].length !== size) {
                randCharaValue = CHARACTERDATA[characteristic][characteristicKeys[Math.floor(Math.random() * characteristicKeys.length)]];
                for (const value of updatedDispCharaValues[characteristic]) {
                    if (value === randCharaValue) {
                        isDuplicate = true;
                        break;
                    }
                }
                if (isDuplicate !== true) {
                    updatedDispCharaValues[characteristic].push(randCharaValue);
                    isDuplicate = false;
                } else {
                    isDuplicate = false;
                }
            }
        } else {
            while (updatedDispCharaValues[characteristic].length !== size) {
                randCharaValue = CHARACTERDATA[characteristic][characteristicKeys[Math.floor(Math.random() * characteristicKeys.length)]];
                updatedDispCharaValues[characteristic].push(randCharaValue);
            }
        }
    }

    return (
        <button onClick={handleClick}>
            Randomize
        </button>
    );
}