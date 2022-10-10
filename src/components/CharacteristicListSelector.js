import React from 'react';

export default function CharacteristicListSelector(props) {
    function handleChange(event) {
        props.setListSelectorValue(event.target.value);
    }

    return (
        <form>
            <label htmlFor='chara-list-selector'>View Values of:</label>
            <select
                id='chara-list-selector'
                name='chara-list-selector'
                value={props.listSelectorValue}
                onChange={handleChange}
            >
                <option value='race'>Race</option>
                <option value='skill'>Major Skills</option>
                <option value='faction'>Faction</option>
                <option value='follower'>Follower Type</option>
            </select>
        </form>
    );
}