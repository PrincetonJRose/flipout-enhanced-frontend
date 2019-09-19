export default (state = { user: null, errors: [], gameStats: { misses: 0, combo: 0 , comboChain: 0, turns: 0 } }, action) => {
    switch(action.type)  {
        case 'LOGIN_USER': {
            return {
                ...state, user: action.user
            }
        }
        case 'LOGOUT_USER': {
            return {
                ...state, user: null
            }
        }
        default: return state
    }
}