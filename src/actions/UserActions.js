import * as types from './ActionTypes'

export const addUser = character => ({type: types.ADD_USER, character})
export const deleteUser = index => ({type: types.DELETE_USER, index})
export const loginUser = (email, password) => ({type: types.LOGIN_USER, email, password})
export const loginOut = () => ({type: types.LOGIN_OUT})