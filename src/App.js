import { useState } from 'react';
import './App.css';
import Button from './Button';

function App() {
  const [color, setColor] = useState('purple');

  return (
    <div
      className={`App`}
      style={{
        backgroundColor: color,
      }}
    >
      <div className="container">
        <h1>Hello world!</h1>
        <Button color="red" setColor={setColor} />
        <Button color="yellow" setColor={setColor} />
        <Button color="blue" setColor={setColor} />
        <Button color="purple" setColor={setColor} />
      </div>
    </div>
  );
}

export default App;
