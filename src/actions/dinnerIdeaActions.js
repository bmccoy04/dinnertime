import axios from "axios"

export function fetchDinnerIdeas(){
    return function(dispatch){
        console.log(dispatch);
        // axios.get("http://localhost:3011/api/dinnerideas")
        // .then((response) => {
        //     console.log(response.data);
        //     dispatch({type: "FETCH_DINNERIDEAS_FULFILLED", payload: response.data})
        // })
        // .catch((err) => {
        //     dispatch({type: "FETCH_DINNERIDEAS_REJECTED", payload: err})
        // })

        dispatch({type: "FETCH_DINNERIDEAS_FULFILLED", payload: [{name: "Bryan", id:1}]})
    }
}

// export function addTweet(){
//     return {
//         type: 'ADD_TWEET',
//         payload: {
//             id,
//             text,
//         }
//     }
// }