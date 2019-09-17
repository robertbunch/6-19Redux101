// this file is an action creator!
// action creators return actions
// What is an action? An action is an object
// that has at least 1 property: type
// The action (object with a type property)
    // is then going to be handed to the dispatch
    // The dispatch will send that action 
    // to all reducers
export default (operation,indexToChange)=>{
    return {
        type: "updateFrozen",
        payload: {
            operation,
            indexToChange
        }
    }
}

