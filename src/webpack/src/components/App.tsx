import React from 'react'

export const App = () => {
    const [count, setCount] = React.useState(0)
    const increment = () => setCount(prev => prev + 1)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>inc</button>
        </div>
    )
}