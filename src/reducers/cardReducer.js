export default (state = { decks: [], gameDeck: [], themes: [], numColumns: 4, numRows: 4, cardTotal: 16, compare: [], theme: null, cardBacks: null, cardBack: null, deckTheme: [], gameStats: { misses: 0, combo: 0 , comboChain: 0, turns: 0, win: false } }, action) => {
    switch (action.type) {
        case 'SET_CARD_BACKS': {
            return {
                ...state,
                cardBacks: {
                    pokemon: ["../images/darkPokeBall.png", "../images/lightPokeBall.png"],
                }
            }
        }
        case 'RESET_GAME_STATS': {
            return {
                ...state,
                gameStats: {
                    misses: 0,
                    combo: 0,
                    comboChain: 0,
                    turns: 0,
                    win: false,
                },
                gameDeck: [],
            }
        }
        case 'RANDOM_CARD_BACK': {
            let cardBackArray
            while (!cardBackArray) {
                cardBackArray = state.cardBacks[state.theme]
            }
            let cardBack
            while (!cardBack) {
                cardBack = cardBackArray[Math.round(Math.random() * cardBackArray.length)]
            }
            return {
                ...state,
                cardBack: cardBack,
            }
        }
        case 'SET_THEME': {
            return {
                ...state,
                theme: action.theme
            }
        }
        case 'SET_DECK_THEME': {
            return {
                ...state,
                deckTheme: action.themeChosen
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
                cardTotal: size[0] * size[lastIndex]
            }
        }
        case 'GENERATE_GAME_DECK': {
            // Pick random selections from the array of pictures for the chosen theme
            let newDeck = state.deckTheme.slice()
            let randomSelection = []
            for (let i = 0; i < state.cardTotal; i++) {
                randomSelection.push(false)
            }
            for (let i = 0; i < (state.cardTotal/2); i++) {
                let randomIndex = Math.round(Math.random() * newDeck.length)
                let randomPosition
                while (true) {
                    randomPosition = Math.round(Math.random() * (state.cardTotal - 1))
                    if (randomSelection[randomPosition] === false) {
                        randomSelection.splice(randomPosition, 1, newDeck[randomIndex])
                        break
                    }
                }
                while (true) {
                    randomPosition = Math.round(Math.random() * (state.cardTotal - 1))
                    if (randomSelection[randomPosition] === false) {
                        randomSelection.splice(randomPosition, 1, newDeck[randomIndex])
                        break
                    }
                }
            }
            let indexPosition = -1
            let addIndex = randomSelection.map( card => {
                indexPosition += 1
                return {...card, index: indexPosition}
            })
            return {
                ...state,
                gameDeck: addIndex
            }
        }
        case 'FLIP_CARD': {
            let flip = state.gameDeck.slice()
            let compareCards = state.compare.slice()
            let gameStats = {...state.gameStats}
            if (compareCards.length < 2) {
                flip[action.card.index].isFlipped = true
                compareCards.push(action.card)
            }
            if (compareCards.length === 2) {
                if (compareCards[0].id === compareCards[1].id) {
                    flip = flip.map( card => {
                        if (card.index === compareCards[0].index || card.index === compareCards[1].index) {
                            card.isMatched = true
                            return card
                        } else {
                            return card
                        }
                    })
                    if (gameStats.combo > gameStats.comboChain || gameStats.combo > 1) {
                        gameStats.comboChain ++
                    }
                    gameStats.turns ++
                    gameStats.combo ++
                } else if (compareCards.length === 2 && compareCards[0].id !== compareCards[1].id) {
                    gameStats.turns ++
                    gameStats.misses ++
                    gameStats.combo = 0
                }
            }

            let count = 0
            flip.forEach( card => {
                if (card.isMatched)
                    count += 1
            })
            if (count === flip.length) {
                gameStats.win = true
            }
            return {
                ...state,
                gameDeck: flip,
                compare: compareCards,
                gameStats: gameStats,
            }
        }
        case 'FLIP_MATCHED_CARDS': {
            let flip = state.gameDeck.slice().map( card => {
                if (card.isMatched) {
                    card.isFlipped = true
                    return card
                } else {
                    card.isFlipped = false
                    return card
                }
            })
            return {
                ...state,
                gameDeck: flip,
                compare: [],
            }
        }
        default: return state
    }
}