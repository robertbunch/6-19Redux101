export default (operation, indexToChange)=>{
    return {
        type: "updateMeat",
        payload: {
            operation,
            indexToChange
        }
    }
}