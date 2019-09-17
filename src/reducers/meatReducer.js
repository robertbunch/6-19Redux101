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
    if(action.type === 'updateMeat'){
        let newState = [...state];
        if(action.payload.operation === '+'){
            newState[action.payload.indexToChange].quantity++;
        }else if(action.payload.operation === '-'){
            newState[action.payload.indexToChange].quantity--;
        }
        return newState;
    }else if(action.type === 'clearInventory'){
        return [];
    }else if(action.type === 'resetInventory'){
        return seedData;
    }else{
        return state;
    }
}