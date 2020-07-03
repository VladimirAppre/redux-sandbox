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


//========================================================

// import {bindActionCreators} from "redux";
// import * as actions from "../actions";
//
// const mapDispatchToProps = (dispatch) => {
//   const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
//   return {
//     inc,
//     dec,
//     rnd
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return  bindActionCreators(actions, dispatch);
// };