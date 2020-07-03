import {createStore} from "redux";

//reducer
const reducer = (state = 0, action) => {

  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RND':
      return state + action.payload;

    default:
      return state;
  }
  ;
};

//sore
const store = createStore(reducer);


//action creators
const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = () => ({type: 'RND', payload: Math.floor(Math.random()*10)});



document.getElementById('dec')
  .addEventListener('click',()=>{
    store.dispatch(dec());
  });

document.getElementById('inc')
  .addEventListener('click',()=>{
    store.dispatch(inc());
  });

document.getElementById('rnd')
  .addEventListener('click',()=>{
    store.dispatch(rnd());
  });

const update = () => {
document.getElementById('counter').innerHTML = store.getState();
}
store.subscribe(update)



