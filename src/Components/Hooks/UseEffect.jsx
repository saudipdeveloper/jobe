import { useEffect, useState } from "react"

const UseEffect = () => {
    const [data, setData] = useState(0);
    const [value, setValue] = useState(0);

    const updateHandler = () => {
        setData(data + 1);
    };

    const updateValueHandler = () => {
        setValue(value + 1);
    };

    useEffect(() => {
      updateHandler();
    }, [value]);
    return (
        <>
        <em><h3>Learning UseEffect Hook</h3></em>
        <h1>{data}</h1>
        <br />
        <button onClick={updateHandler}>Update</button>
        <h1>
            <em>{value}</em>
        </h1>
        <button onClick={updateValueHandler}>Update Value</button>
        </>
    );
};

export default UseEffect;