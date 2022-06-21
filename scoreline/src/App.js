//import logo from './logo.svg';
//import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment} from './actions'
import {decrement} from './actions'

function App() {
  const counter = useSelector(state => state.counter);
  //const islogged = useSelector(state => state.islogged)
  const dispatch = useDispatch();


  return (
    <div className="App">
     <h1>counter {counter}</h1>
     <button onClick={() => dispatch(increment())}>+</button>
     <button onClick={() => dispatch(decrement())}>-</button>
     
     {/* create an action for button */}
    </div>
  );
}

export default App;
