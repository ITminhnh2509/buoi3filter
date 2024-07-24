import React, { useEffect, useState } from 'react'

export default function Hook7() {
    const [count, setCount] = useState(1);
    const [number, setNumber] = useState(1);
    useEffect(() => {
        console.log("Side effect");
    }, [count, number])
    console.log("render hook7")

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Xin chào nguyễn hoàng minh");
            setCount(preState => preState + 1);

        }, 1000)
        return () => {
            clearInterval(interval);
            console.log("Interval clean up")
        }
    }, [])

    return (
        <div>
            <h1>Tìm hiểu useEffect</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Count up</button>
            <p>Number: {number}</p>
            <button onClick={() => setNumber(number + 1)}>Number up</button>
        </div>
    )
}
