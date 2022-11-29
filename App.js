import Counter from "./Counter";
import "./styles.css";
import { CounterContext } from './context/Counter'
import { useContext } from "react";
export default function App() {
  const counterContext = useContext(CounterContext);
  console.log(counterContext);
  return (
    <div className="App">
      <h1>{`Count is ${counterContext.count}`} </h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}
