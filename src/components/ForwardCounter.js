import React, {useEffect, useState} from "react";
import Card from "./Card";

const ForwardCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, []);
    return <Card>{count}</Card>
}

export default ForwardCounter;