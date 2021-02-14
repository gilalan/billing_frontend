import { BILLING_CYCLE_LIST_FETCHED } from '../helpers/Consts';

const INITIAL_STATE = { list: [] };

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case BILLING_CYCLE_LIST_FETCHED:
            return { ...state, list: action.payload.data }
        default:
            return state;
    }
}