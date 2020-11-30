export function manageFriends(state = {
    friends: []
}, action){

    switch(action.type){
        case ("ADD_FRIEND"):
            return (
                {...state,
                    friends: [...state.friends, action.friend]
                }
            )
        case ("REMOVE_FRIEND"):
            let currentFriends = [...state.friends]
            return (
                {...state,
                    friends: currentFriends.filter(friend => friend.id !== action.id)
                }
            ) 
        default:
            return state
    }

}
