import React from 'react';

export default function RandomizerDisplay(props) {
    const firstRowData = (
        <tr>
            <td className={containsCharaValue('race', props.displayedCharaValues.race[0])
                ? 'locked-in'
                : ''}
            >
                {props.displayedCharaValues.race[0]}
            </td>
            <td className={containsCharaValue('skill', props.displayedCharaValues.skill[0])
                ? 'locked-in'
                : ''}
            >
                {props.displayedCharaValues.skill[0]}
            </td>
        </tr >
    );

    const secondRowData = (
        <tr>
            <td></td>
            <td className={containsCharaValue('skill', props.displayedCharaValues.skill[1])
                ? 'locked-in'
                : ''}
            >
                {props.displayedCharaValues.skill[1]}
            </td>
        </tr >
    );

    const thirdRowData = (
        <tr>
            <td></td>
            <td className={containsCharaValue('skill', props.displayedCharaValues.skill[2])
                ? 'locked-in'
                : ''}
            >
                {props.displayedCharaValues.skill[2]}
            </td>
        </tr >
    );

    const fourthRowData = (
        <tr>
            <td className={containsCharaValue('faction', props.displayedCharaValues.faction[0])
                ? 'locked-in'
                : ''}
            >
                {props.displayedCharaValues.faction[0]}
            </td>
            <td className={containsCharaValue('follower', props.displayedCharaValues.follower[0])
                ? 'locked-in'
                : ''}
            >
                {props.displayedCharaValues.follower[0]}
            </td>
        </tr >
    );

    function containsCharaValue(characteristic, characteristicValue) {
        for (const value of props.lockedInValues[characteristic]) {
            if (value.includes(characteristicValue)) {
                return true;
            }
        }
        return false;
    }

    return (
        <table>
            <tbody>
                <tr>
                    <th>Race</th>
                    <th>Major Skills</th>
                </tr>
                {firstRowData}
                {secondRowData}
                {thirdRowData}
                <tr>
                    <th>Faction</th>
                    <th>Follower Type</th>
                </tr>
                {fourthRowData}
            </tbody>
        </table>
    );
}