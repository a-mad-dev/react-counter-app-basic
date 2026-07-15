import { useState } from 'react'
import AddButton from './addButton'
import Display from './display'


function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div className="counter" >
            < Display countvar={count} />
            < AddButton onClick={() => setCount(count + 1)} text="Count"></ AddButton >
        </div>
    )
}

export default Counter