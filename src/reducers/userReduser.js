import * as types from "../actions/ActionTypes"

const defaultState = {
    characters: [],
    characterLastId: 1,
    isLogined: false
}

export const reducer = (state = defaultState, action) => {
    switch (action.type){
        case types.ADD_USER:
            return {
                characters: [...state.characters, action.character], 
                characterLastId: state.characterLastId + 1, 
                isLogined: state.isLogined
            }

        case types.DELETE_USER:
            console.log(state)
            const characters = state.characters;
            return {
                ...state,
                characters: characters.filter((character, i) => { 
                    return i !== action.index;
                })
            }

        case types.LOGIN_USER:
            console.log(action)
            let user = state.characters.filter((character) =>{
                console.log(action.email)
                console.log(character.email)
                return action.email === character.email
            })
            console.log(user)
            user = user.filter((character) => {
                console.log(action.password)
                console.log(character.password)
                return action.password === character.password
            })
            if(user.length !== 0) {
                console.log(true)
                return {...state, isLogined: true}
            }
            return state
        case types.LOGIN_OUT:
            return {...state, isLogined: false}
        default:
            return state
    }
}