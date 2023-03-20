import React, {useState} from 'react';
import './customCounter.scss'

const CustomCounter = () => {
    const [count, setCount] = useState(0)
    const increment = () => setCount(count + 1)
    const decrement = () => count > 0 && setCount(count - 1)

    return (
        <div className="custom-counter">
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default CustomCounter;