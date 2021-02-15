const userKey = '_mymoney_user';
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'TOKEN_VALIDATED':
            if (action.payload) {
                //console.log('Token validado...');
                return { ...state, validToken: true }
            } else {
                //console.log('Token invalidado... removendo do localStorage');
                localStorage.removeItem(userKey);
                return { ...state, validToken: false, user: null }
            }
        case 'USER_FETCHED':
            //console.log('Action de quando faz login ou signup, payload: ', action.payload);
            localStorage.setItem(userKey, JSON.stringify(action.payload));
            return { ...state, user: action.payload, validToken: true }
        default:
            return state;
    }
}

