import store from "../store";
import actionTypes from "../actions/actionTypes";


export default (state = store, {type, payload}) => {
    switch (type){
        case actionTypes.ADD_ALL_SENDER_ID_TEMPLATES:
            return {
                ...state,
                senderIdProperties: payload
            }
        case actionTypes.SET_ID_DOC_PATH:
            return {
                ...state,
                idDocumentPath: payload
            }
        case actionTypes.ADD_TO_SAVED_CARDS:
            return {
                ...state,
                savedCards: [...state.savedCards, payload]
            }
        case actionTypes.SET_SAVED_CARDS:
            return {
                ...state,
                savedCards: payload
            }
        case actionTypes.ADD_TO_SAVED_MOMO_NUMBERS:
            return {
                ...state,
                savedMomoNumbers: [...state.savedMomoNumbers, payload]
            }
        case actionTypes.SET_SAVED_MOMO_NUMBERS:
            return {
                ...state,
                savedMomoNumbers: payload
            }
        case actionTypes.SET_WALLET_BALANCE:
            return {
                ...state,
                walletBalance: payload
            }
        case actionTypes.SET_SMS_COUNT:
            return {
                ...state,
                smsCount: payload
            }
        case actionTypes.SET_BUNDLE_DESCRIPTION:
            return {
                ...state,
                bundleDesc: payload
            }
        case actionTypes.SET_BUNDLE_TITLE:
            return {
                ...state,
                bundleTitle: payload
            }
        case actionTypes.SET_INSUFFICIENT_BALANCE_TEXT:
            return {
                ...state,
                insufficientBalanceText: payload
            }
        case actionTypes.SET_BUNDLE_PACKAGES:
            return {
                ...state,
                bundlePackages: payload
            }
        default:
            return state
    }
}
