export default (state = { decks: [], gameDeck: [], themes: [], turnOver: 0, numColumns: null, numRows: null, cardTotal: 16, compare: [], theme: 'pokemon', cardBacks: {}, themeDeck: [] }, action) => {
    switch (action.type) {
        case 'SET_THEME': {
            return {
                ...state, themeDeck: action.themeData
            }
        }
        case 'SET_BOARD_SIZE': {
            // get string with board size, then take the first and last items which should be #'s
            let lastIndex = action.boardSize.length-1
            return {
                ...state,
                numRows: action.boardSize[0],
                numColumns: action.boardSize[lastIndex],
            }
        }
        default: return state
    }
}