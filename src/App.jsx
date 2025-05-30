import { useState } from "react";
import { ColorPicker } from "./components/ColorPicker";

function App() {
  const [count, setCount] = useState(0);
  const colors = ["red", "blue", "green", "yellow", "purple"];

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>React App</h1>
      <Button count={count} onClick={handleClick} />
      <Button count={count} onClick={handleClick} />
      <ColorPicker colors={colors} />
    </div>
  );
}

function Button({ count, onClick }) {
  return <button onClick={onClick}>Count: {count}</button>;
}

export default App;
