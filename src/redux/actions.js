import { types } from "./types"

function preloaderOn() {
    return{
        type: types.PRELOADER_ON
    }
}

function preloaderOff() {
    return{
        type: types.PRELOADER_OFF
    }
}

function alertOnn() {
    return{
        type: types.ALERT_ON
    }
}
function alertOff() {
    return{
        type: types.ALERT_OFF
    }
}

export function addUserAction (user) {
    return async function (dispatch) {
        dispatch(preloaderOn())

        const options = {
            method: "POST",
            headeres: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user)
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/users', options)

        if(response.status >= 200 && response.status <= 204) {
            dispatch(preloaderOff())
            alert('successfully')
        }

        if(response.status === 404) {
            dispatch(preloaderOff)
            alert('fail')
        }
    }
}