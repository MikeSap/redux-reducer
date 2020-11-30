export function managePresents(state, action){
    
    switch(action.type){    
        case ("INCREASE"):
            let currentNumOfPres = parseInt(state.numberOfPresents)
            return {
                numberOfPresents: currentNumOfPres + 1
            }            
    
    default:
        return state
    }
}
