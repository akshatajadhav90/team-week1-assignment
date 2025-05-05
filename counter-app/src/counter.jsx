// Counter.jsx
import { useState } from 'react';

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue); 

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={styles.container}>
      <h2>React Counter</h2>
      <p style={styles.count}>Count: {count}</p>
      <div>
        <button onClick={increment} style={styles.button}>+1</button>
        <button onClick={decrement} style={styles.button}>−1</button>
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: 'center', marginTop: '50px' },
  count: { fontSize: '24px', margin: '20px' },
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '18px',
    cursor: 'pointer',
  },
};

export default Counter;
