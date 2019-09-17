// All reducers have 2 params:
// 1. Current state, usually provide a default
// 2. The action object

const seedData = [
    {
        food: 'steak',
        quantity: 20,
    },
    {
        food: 'chicken',
        quantity: 50,
    },
    {
        food: 'fish',
        quantity: 12
    },
    {
        food: 'crab',
        quantity: 120,
    },
]

export default (state = seedData, action)=>{
    console.log("Meat Reducer is running!");
    console.log(action.type)
    return state;
}