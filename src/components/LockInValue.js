import React from 'react';

export default function LockInValue(props) {
    // Create deep copy of locked in values
    const updatedLockedInValues = JSON.parse(JSON.stringify(props.lockedInValues));
    const lockInLength = updatedLockedInValues[props.characteristic].length;

    // Create deep copy of displayed chara values
    const updatedDispCharaValues = JSON.parse(JSON.stringify(props.displayedCharaValues));
    const displayedLength = updatedDispCharaValues[props.characteristic].length;

    // Check if chara value this button belongs to is a locked in value; if it is set button text to Remove otherwise set it to Lock In
    let buttonText = 'Lock In';
    for (const value of updatedLockedInValues[props.characteristic]) {
        if (value === props.characteristicValue) {
            buttonText = 'Remove';
        }
    }

    function handleClick() {
        if (buttonText === 'Remove') {
            removeElement(updatedLockedInValues, lockInLength, props.characteristicValue);
            removeElement(updatedDispCharaValues, displayedLength, props.characteristicValue);
        } else {
            if (isFull(lockInLength)) {
                // Remove first characteristic value in locked in values
                const removedValue = updatedLockedInValues[props.characteristic].shift();
                // Remove above value from displayed chara values and update its button text
                removeElement(updatedDispCharaValues, displayedLength, removedValue)
                addElement();
            } else {
                addElement();
            }
        }
        props.setLockedInValues(updatedLockedInValues);
        props.setDisplayedCharaValues(updatedDispCharaValues);
    }

    function removeElement(list, length, value) {
        for (let i = 0; i < length; i++) {
            if (list[props.characteristic][i] === value) {
                list[props.characteristic].splice(i, 1);
                break;
            }
        }
    }
    // Add characteristic value this button belongs to to lock in values and displayed values
    function addElement() {
        updatedLockedInValues[props.characteristic].push(props.characteristicValue);
        updatedDispCharaValues[props.characteristic].unshift(props.characteristicValue);
    }

    function isFull(length) {
        switch (props.characteristic) {
            case 'skill':
                return (length === 3 ? true : false);
            default:
                return (length === 1 ? true : false);
        }
    }

    return (
        <button
            className={buttonText === 'Remove'
                ? 'lock-in-button-remove'
                : 'lock-in-button'
            }
            type='button'
            onClick={handleClick}
        >
            {buttonText}
        </button>
    );
}