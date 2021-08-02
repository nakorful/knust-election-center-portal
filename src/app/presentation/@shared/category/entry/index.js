import {EntryStyles} from "./styles";
import {useEffect} from "react";

function Entry({name, avatar, position, handleRadioChange}) {

    useEffect(() => {
        console.log('position in entry is', position);
    }, []);

    return (
        <EntryStyles>
            <div className='wrapper'>
                <div style={{marginRight: '20px'}}>
                    <input type="radio" name={position} value={name} onChange={() => handleRadioChange(position, name)}/>
                </div>
                <div>
                    <img src={avatar} alt={name} />
                </div>
                <h3>{name}</h3>
            </div>
        </EntryStyles>
    );
}

export default Entry
