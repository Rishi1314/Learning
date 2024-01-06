
import './App.css';
import { useSelector,useDispatch } from 'react-redux';

function App() {
  const dispatch=useDispatch();
  const increment=()=>{
    dispatch({type:'INC'})
  }
  const decrement=()=>{
    dispatch({type:'DEC'})
  }
  const add=()=>{
    dispatch({type:"ADD",payload:10})
  }
  const counter=useSelector((state)=>state.counter);
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={add}>Add</button>
    </div>
  );
}

export default App;
