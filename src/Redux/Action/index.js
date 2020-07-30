import axios from 'axios';
import { FETCHING_USERS, RECIVE_USERS, FETCHED_FAIL } from '../const_variables';

export const getAlbums = () => {
    return dispatch => {
        //Fetch Start
        dispatch({
            type: FETCHING_USERS,
            payload: []
        })
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => response.data)
            .then(data => {
                //Fetch End
                dispatch({
                    type: RECIVE_USERS,
                    payload: data
                })
            })
            .catch(error => {
                //Fetching Error
                dispatch({
                    type: FETCHED_FAIL,
                    payload: error.message
                })
            })
    }
}
