import { BILLING_SUMMARY_FETCHED } from '../helpers/Consts';

const INITIAL_STATE = { summary: { allCredits: 0, allDebts: 0 } };

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case BILLING_SUMMARY_FETCHED:
            //console.log("Request 2: ", action.payload);
            return { ...state, summary: action.payload.data }
        default:
            return state;
    }
}