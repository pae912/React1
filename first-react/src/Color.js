import { useState } from "react";

const Color = () => {
    const [color, setColor] = useState("green");

    return (
        <>
            <h1>My favorite color is {color}!</h1>
            <button type="button" onClick={() => setColor("blue")}>Blue</button>
        </>
    )
}

export default Color;