export default (state = { decks: [], gameDeck: [], themes: [], turnOver: 0, numColumns: 4, numRows: 4, cardTotal: 16, compare: [], theme: 'pokemon', cardBacks: {}, themeDeck: [] }, action) => {
    switch (action.type) {
        case 'SET_THEME': {
            return {
                ...state, themeDeck: action.themeData
            }
        }
        case 'SET_BOARD_SIZE': {
            // get string with board size, then take the first and last items which should be #'s
            let size = action.boardSize
            if (!size)
                size = '4x4'
            let lastIndex = size.length-1
            return {
                ...state,
                numRows: size[0],
                numColumns: size[lastIndex],
            }
        }
        default: return state
    }
}