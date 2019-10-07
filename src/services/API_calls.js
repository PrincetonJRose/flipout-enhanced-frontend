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

export function userLogin(info) {
    return fetch(mainUrl + `login`, {
        method: 'POST',
        header: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(info)
    })
    .then(res => res.json())
}

export function getUser(id) {
    return fetch(mainUrl + `users/${id}`)
        .then(res => res.json())
}