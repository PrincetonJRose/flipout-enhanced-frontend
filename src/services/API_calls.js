import jwt_decode from 'jwt-decode'
const mainUrl = `http://localhost:3000/`

export function getTheme(theme) {
    return fetch(mainUrl + `themes/` + theme)
    .catch(errors => console.log(errors))
    .then(res => res.json())
    .then(themeData => {
        let addFlipped = themeData.map( theme => {
            return {...theme, isFlipped: false}
        })
        let addMatched = addFlipped.map( theme => {
            return {...theme, isMatched: false}
        })
        return addMatched
    })
}