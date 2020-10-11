const redux = require('redux');
const createStore = redux.createStore; 

const initialState = {
    value : 0,
    age: 17
}
// Reducer
const rootReducer = (state = initialState, action) => {
    console.log(action)
    if(action.type === 'ADD_AGE'){
        return {
            ...state, // metode copy objek lama dengan emmascript
            age: state.age + 1,
        }
    }
    if(action.type === 'CHANGE_VALUE'){
        return {
            ...state, 
            value: state.value + action.newValue,
        }
    }
    return state;
}
// Store
const store = createStore(rootReducer);
console.log(store.getState())

// Subscribtion
store.subscribe(() => {
    console.log('store change:', store.getState())
})

// Dispatching Action
store.dispatch({
    type: 'ADD_AGE',
})
store.dispatch({
    type: 'CHANGE_VALUE',
    newValue: 12 
})
console.log(store.getState())
