import {ThankYouStyles} from "./style";
import {useHistory} from 'react-router-dom';

function ThankYouPage() {
    const history = useHistory();

    const handleLogout = (e) => {
        e.preventDefault();

        history.push('/');
    }

    return (
        <ThankYouStyles>
            <div style={{fontSize: '4rem', textAlign: 'center'}}>
                THANK YOU
                <div>
                    <button onClick={handleLogout} type='button'>Logout</button>
                </div>
            </div>
        </ThankYouStyles>
    )
}

export default ThankYouPage
