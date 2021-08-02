import actionTypes from "../actions/actionTypes";
import store from "../store"


export default (state = store, {type, payload}) => {
    switch (type){
        case actionTypes.DISPATCH_VOTER:
            return{
                ...state,
                voter: payload
            }

        default:
            return state;
    }
}
