export default (state = { decks: [], gameDeck: [], themes: [], turnOver: 0, numColumns: 4, numRows: 4, cardTotal: 16, compare: [], theme: 'pokemon', cardBacks: {}, themeDeck: [] }, action) => {
    switch (action.type) {
        case 'SET_THEME': {
            let themeData = action.themeData
            let addFlipped = themeData.map( theme => {
                return {...theme, isFlipped: false}
            })
            let addMatched = addFlipped.map( theme => {
                return {...theme, isMatched: false}
            })
            return {
                ...state, themeDeck: addMatched
            }
        }
        default: return state
    }
}