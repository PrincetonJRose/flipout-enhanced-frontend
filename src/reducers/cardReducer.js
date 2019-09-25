export default (state = { decks: [], gameDeck: [], themes: [], turnOver: 0, numColumns: 4, numRows: 4, cardTotal: 16, compare: [], theme: 'pokemon', cardBacks: {}, themeDeck: [] }, action) => {
    switch (action.type) {
        case 'SET_THEME': {
            return {
                ...state, themeDeck: action.themeData
            }
        }
        default: return state
    }
}