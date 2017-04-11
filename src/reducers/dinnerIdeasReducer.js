export default function reducer(state={
    dinnerIdeas:[],
    fetching: false,
    fetched: false,
    error: null,
}, action){
    console.log("action"); 
    switch(action.type){
        case "FETCH_DINNERIDEAS":{
            return {...state, fetching: true}
        }
        case "FETCH_DINNERIDEAS_REJECTED":{
            //return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_DINNERIDEAS_FULFILLED":{
            console.log("fullfilled");
            return {
                ...state, dinnerIdeas: action.payload
                // ...state,
                // fetching: false,
                // fetched: true,
                // tweets: action.payload
            }
        }
        case "ADD_DINNERIDEA":{
            // return {
            //     ...state,
            //     dinnerIdeas: [...state.dinnerIdeas, action.payload],
            // }
        }
        case "UPDATE_DINNERIDEAS":{
            // const {id, tweet} = action.payload;
            // const newTweets = [...state.tweets];
            // const tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id);
            // newTweets[tweetToUpdate] = action.payload;

            // return{
            //     ...state,
            //     tweets: newTweets,
            // }
        }
        case "DELETE_DINNERIDEA":{
            return {
              //  ...state,
             //   dinnerIdeas: state.dinnerIdeas.filter(idea => idea.id !== action.payload)
            }
        }
    }
    return state;
}