import {CategoryStyles} from "./styles";
import {useEffect, useState} from "react";
import { position as electoralPosition } from "../../@shared/candidates";
import Entry from "./entry";

function Category({categoryTitle, candidates, selectedPresident, selectedFinancialSec, selectedGeneralSec, selectedWoCom}) {
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        console.log("candidates", candidates);
    }, []);

    const handleRadioChange = (position, name) => {
        console.log(`Selected name for ${position} is ${name}`);

        if (position === electoralPosition.PRESIDENT) {
            selectedPresident(name);
        } else if (position === electoralPosition.FINANCIAL_SECRETARY) {
            selectedFinancialSec(name);
        } else if (position === electoralPosition.GENERAL_SECRETARY) {
            selectedGeneralSec(name);
        } else if (position === electoralPosition["WOMEN'S COMMISSIONER"]) {
            selectedWoCom(name);
        }
    }

    return (
        <CategoryStyles>
            <h2>{categoryTitle}</h2>
            {
                Array.isArray(candidates) && candidates.length > 0
                ? candidates.map(candidate => <Entry {...candidate} handleRadioChange={handleRadioChange} />)
                    : null
            }
        </CategoryStyles>
    );
}

export default Category
