import { FETCHING_USERS, RECIVE_USERS, FETCHED_FAIL } from '../const_variables'
export const albumInitState = {
    fetching: false,
    fetched: false,
    listOfAlbum: [],
    fetchIsError: false,
    errorMessage: null
}
export const albumReducer = (state = albumInitState, action) => {
    switch (action.type) {
        case FETCHING_USERS:
            return {
                errorMessage: null,
                fetchIsError: false,
                fetched: false,
                fetching: true,
                listOfAlbum: action.payload
            }
        case RECIVE_USERS:
            return {
                errorMessage: null,
                fetchIsError: false,
                fetching: false,
                fetched: true,
                listOfAlbum: action.payload
            }
        case FETCHED_FAIL:
            return {
                fetching: false,
                fetched: false,
                fetchIsError: true,
                listOfAlbum: [],
                errorMessage: action.payload
            }
        default:
            return state;
    }
}