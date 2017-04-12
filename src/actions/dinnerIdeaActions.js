import axios from "axios"

export function fetchDinnerIdeas(){
    return{
        type:"FETCH_DINNERIDEAS",
        payload: axios.get("http://localhost:3011/api/dinnerideas")//[{name: "Bryan", id:1}]
    }
}

export function addDinnerIdea(idea){
    return{
        type:"ADD_DINNERIDEA",
        payload: axios.post("http://localhost:3011/api/dinnerideas", idea)
    }
}


export function deleteDinnerIdea(idea){
    return{
        type:"DELETE_DINNERIDEA",
        payload: axios.delete("http://localhost:3011/api/dinnerideas/"+idea.id)
    }
}
