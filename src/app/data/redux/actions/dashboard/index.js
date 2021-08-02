import actionTypes from "../actionTypes";

export const logoutUser = () => ({
    type: actionTypes.LOGOUT_USER
});

export const populateSenderIdTemplate = (senderIdTemplates) => ({
    type: actionTypes.ADD_ALL_SENDER_ID_TEMPLATES,
    payload: senderIdTemplates
});

export const new_sender_id = (senderIdTemplate) => ({
    type: actionTypes.ADD_TO_SENDER_ID_LIST,
    payload: senderIdTemplate
});

export const setSMSMsisdn = (msisdn) => ({
    type: actionTypes.SET_MSISDN,
    payload: msisdn
});

export const setIdDocumentPath = (path) => ({
    type: actionTypes.SET_ID_DOC_PATH,
    payload: path
});

export const setSenderIdProperties = (senderIdProps) => ({
    type: actionTypes.SET_SENDER_ID_PROPERTIES,
    payload: senderIdProps
});

export const removeFromSenderIdProperties = (senderId) => ({
    type: actionTypes.REMOVE_FROM_SENDER_ID_PROPERTIES,
    payload: senderId
});

export const addToSavedCards = (paymentOption) => ({
    type: actionTypes.ADD_TO_SAVED_CARDS,
    payload: paymentOption
})

export const setSavedCards = (paymentOptionList) => ({
    type: actionTypes.SET_SAVED_CARDS,
    payload: paymentOptionList
})

export const addToSavedMomoNumbers = (paymentOption) => ({
    type: actionTypes.ADD_TO_SAVED_MOMO_NUMBERS,
    payload: paymentOption
})

export const setSavedMomoNumbers = (paymentOptionList) => ({
    type: actionTypes.SET_SAVED_MOMO_NUMBERS,
    payload: paymentOptionList
})

export const setWalletBalance = (balance) => ({
    type: actionTypes.SET_WALLET_BALANCE,
    payload: balance
})

export const setSmsCount = (smsCount) => ({
    type: actionTypes.SET_SMS_COUNT,
    payload: smsCount
})

export const setBundleDescription = (description) => ({
    type: actionTypes.SET_BUNDLE_DESCRIPTION,
    payload: description
})

export const setBundleTitle = title => ({
    type: actionTypes.SET_BUNDLE_TITLE,
    payload: title
})

export const setInsufficientBalance = text => ({
    type: actionTypes.SET_INSUFFICIENT_BALANCE_TEXT,
    payload: text
})

export const setBundlePackages = packages => ({
    type: actionTypes.SET_BUNDLE_PACKAGES,
    payload: packages
})
