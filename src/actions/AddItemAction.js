export default (dept, food, quantity)=>{
    const type = `addItem-${dept}`
    return {
        type,
        payload: {
            food,
            quantity
        }

    }
}