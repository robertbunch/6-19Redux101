export default (operation, indexToChange)=>{
    return {
        type: "updateDairy",
        payload: {
            operation,
            indexToChange
        }
    }
}