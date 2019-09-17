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
        // the user clicked on a + or - button on a frozen item
        // we make a copy of state... we NEVER EVER change it ourselves
        let newState = [...state];

        // const p = action.payload;
        // p.operation === '+' ? newState[p.indexToChange].quantity++ : newState[p.indexToChange].quantity--

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