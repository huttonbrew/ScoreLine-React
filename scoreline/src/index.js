import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux'
 import { legacy_createStore } from 'redux'; //globalize state
 import allReducer from './reducers'
// eslint-disable-next-line no-unused-vars
const store = legacy_createStore(
  allReducer,
  window._REDUX_DEVTOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_()
  );




// //store
// //globalized state. holds all the data for our application



// //action= describes what you want to do
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }


// //reducer = how your ation transform the state to the next state

// //counter is a state
// const counter = (state = 0, action) => {
  
//   switch(action.type){
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   }
// };


// let store = createStore(counter);

// //display
//  store.subscribe(() => console.log(store.getState()))


// //dispatch
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());
// store.dispatch(decrement());
// store.dispatch(decrement());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
  <Navbar />
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
