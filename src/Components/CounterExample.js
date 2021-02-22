import React, { useState } from 'react';

function CounterExample() {
    // useState takes in one arg: the value we want to store in state
    const [count, setCount] = useState(0)

    //console.log(useState(0))

    return (
        <div>
            <h1>
                Count is: {count}
            </h1>
            <h1 onClick={() => setCount(count + 1)}>
                Plus
            </h1>
            <h1 onClick={() => setCount(count - 1)}>
                Minus
            </h1>
        </div>
    )
}

export default CounterExample;