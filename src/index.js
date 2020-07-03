import {bindActionCreators, createStore} from "redux";
import reducer from "./reducer";
import * as actions from './actions'

const store = createStore(reducer);
const {dispatch} = store;


// const incDispatch = () => dispatch(inc());
// const decDispatch = () => dispatch(dec());
// const rndDispatch = (payload) => dispatch(rnd(payload));

//my bind action creators
// const bindActionCreator = (cretor, dispatch) => (...args) => {
//   dispatch(cretor(...args));
// };

// const incDispatch = bindActionCreator(inc ,dispatch)
// const decDispatch = bindActionCreator(dec ,dispatch)
// const rndDispatch = bindActionCreator(rnd ,dispatch)

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

document.getElementById('inc')
  .addEventListener('click', inc);

document.getElementById('dec')
  .addEventListener('click', dec);


document.getElementById('rnd')
  .addEventListener('click', rnd);

const update = () => {
  document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(update)



