// All reducers have 2 params:
// 1. Current statement, usually provide a default
// 2. The action object

const seedData = [
    {
        food: 'pizza',
        quantity: 12,
    },
    {
        food: 'ice cream',
        quantity: 21,
    },
    {
        food: 'family dinner',
        quantity: 5
    },
    {
        food: 'frozen veggies',
        quantity: 132,
    },
]

export default (state = seedData, action)=>{
    console.log("Frozen Reducer is running!");
    console.log(action.type)
    console.log(action.payload)
    if(action.type === 'updateFrozen'){
        return action.payload;
    }else{
        return state;
    }
    
}