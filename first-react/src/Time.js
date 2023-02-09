import { useState, useEffect } from "react"


const Time = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=> count + 1);
        },1000);
    })
    return (
        <>
        <h1>秒數：{count}</h1>
        </>
    )
}

export default Time;