import React from 'react';
import LockInValue from './LockInValue';

export default function CharacteristicValueCell(props) {
    return (
        <div
            className='chara-value'
        >
            {props.characteristicValue}
            <LockInValue
                characteristic={props.characteristic}
                characteristicKey={props.characteristicKey}
                characteristicValue={props.characteristicValue}
                lockedInValues={props.lockedInValues}
                setLockedInValues={props.setLockedInValues}
                displayedCharaValues={props.displayedCharaValues}
                setDisplayedCharaValues={props.setDisplayedCharaValues}
            />
        </div>
    );
}