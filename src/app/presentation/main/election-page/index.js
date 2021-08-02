import {ElectionPageStyles} from "./styles";
import {useEffect, useState} from "react";
import {candidates as electoralCandidates, position} from "../../@shared/candidates";
import Category from "../../@shared/category";
import {useSelector} from "react-redux";
import axios from 'axios';

function ElectionPage() {
    const [candidates, setCandidates] = useState(electoralCandidates);
    const [presidents, setPresidents] = useState([]);
    const [generalSecs, setGeneralSecs] = useState([]);
    const [financialSecs, setFinancialSecs] = useState([]);
    const [womenCommissioners, setWomenCommissioners] = useState([]);



    const [selectedPrez, setSelectedPrez] = useState('');
    const [selectedGeneralSec, setSelectedGeneralSec] = useState('');
    const [selectedFinancial, setSelectedFinancial] = useState('');
    const [selectedWoCom, setSelectedWoCom] = useState('');

    const [allCandidates, setAllCandidates] = useState([]);

    useEffect(() => {
        if (candidates) {
            setPresidents(candidates.filter(candidate => candidate.position === position.PRESIDENT));
            setGeneralSecs(candidates.filter(candidate => candidate.position === position.GENERAL_SECRETARY));
            setFinancialSecs(candidates.filter(candidate => candidate.position === position.FINANCIAL_SECRETARY));
            setWomenCommissioners(candidates.filter(candidate => candidate.position === position["WOMEN'S COMMISSIONER"]));
            // candidates.forEach(candidate => {
            //     console.log('candidate here is', candidate);
            //     if (candidate.position === position.PRESIDENT) {
            //         console.log(candidate.position);
            //         setPresidents([...presidents, candidate]);
            //     } else if (candidate.position === position.GENERAL_SECRETARY) {
            //         setGeneralSecs([...generalSecs, candidate]);
            //     } else if (candidate.position === position.FINANCIAL_SECRETARY) {
            //         setFinancialSecs([...financialSecs, candidate]);
            //     } else if (candidate.position === position["WOMEN'S COMMISSIONER"]) {
            //         setWomenCommissioners([...womenCommissioners, candidate]);
            //     }
            // });
        }
    }, []);

    const currentVoter = useSelector(state => state.auth.voter);

    const castVote = e => {
        console.log('selected prez:', selectedPrez);
        console.log('selected general sec:', selectedGeneralSec);
        console.log('selected financial sec:', selectedFinancial);
        console.log('selected women com:', selectedWoCom);

        const studentId = currentVoter.studentId;

        const resourceUrl = `http://localhost:9001/api/v1/cast/vote/${studentId}`;

        const voteResults = [
            {
                candidateName: selectedPrez,
                position: position.PRESIDENT
            },
            {
                candidateName: selectedGeneralSec,
                position: position.GENERAL_SECRETARY
            },
            {
                candidateName: selectedFinancial,
                position: position.FINANCIAL_SECRETARY
            },
            {
                candidateName: selectedWoCom,
                position: position["WOMEN'S COMMISSIONER"]
            }
        ];

        console.log('vote results:', voteResults);

        axios.post(resourceUrl, {
                voteResults: voteResults
        }).then(res => console.log(res));
    }

    return (
        <ElectionPageStyles>
            <header>
                <h1>
                    SRC GENERAL ELECTION
                </h1>
            </header>
            <Category categoryTitle={position.PRESIDENT} candidates={presidents} selectedPresident={setSelectedPrez}/>
            <hr/>
            <Category categoryTitle={position.GENERAL_SECRETARY} candidates={generalSecs} selectedGeneralSec={setSelectedGeneralSec}/>
            <hr/>
            <Category categoryTitle={position.FINANCIAL_SECRETARY} candidates={financialSecs} selectedFinancialSec={setSelectedFinancial}/>
            <hr/>
            <Category categoryTitle={position["WOMEN'S COMMISSIONER"]} candidates={womenCommissioners} selectedWoCom={setSelectedWoCom}/>
            <div style={{textAlign: 'center'}}>
                <button type='submit' onClick={castVote}>Submit</button>
            </div>
        </ElectionPageStyles>
    )
}

export default ElectionPage
