// All reducers have 2 params:
// 1. Current statement, usually provide a default
// 2. The action object

const seedData = [
    {
        food: 'cheese',
        quantity: 120,
    },
    {
        food: 'milk',
        quantity: 37,
    },
    {
        food: 'yogurt',
        quantity: 75
    },
    {
        food: 'kefir',
        quantity: 3,
    },
]

export default (state = seedData, action)=>{
    console.log("Dairy Reducer is running!");
    console.log(action.type)
    if(action.type === 'updateDairy'){
        let newState = [...state];
        let p = action.payload;
        if(p.operation === '+'){
            newState[p.indexToChange].quantity++;
        }else if(p.operation === '-'){
            newState[p.indexToChange].quantity--;
        }
        return newState
    }else if(action.type === 'clearInventory'){
        return [];
    }else if(action.type === 'resetInventory'){
        return seedData;
    }else{
        return state;
    }
}