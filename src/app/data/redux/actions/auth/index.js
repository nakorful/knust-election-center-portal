import actionTypes from "../actionTypes";

const dispatchVoter = (voter) => dispatch => {
    console.log("dispatching voter", voter)
    dispatch({
        type:actionTypes.DISPATCH_VOTER,
        payload:voter
    })
}

export const user = (user) => dispatch => {
    dispatch({
        type: actionTypes.LOGIN_USER,
        payload:user
    })
};


export  {
    dispatchVoter
}

