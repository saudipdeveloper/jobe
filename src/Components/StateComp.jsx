import { useState } from "react";


const StateComp = () => {
    const [value, setValue] = useState(0);

    const updateHandler = () => {
        setValue(value + 5);
    };

    const decreaceHandler = () => {
        if (value > 0) {
            setValue(value - 2);
        }
        else {
            setValue(0);
        }
    };

    const resetHandler = () => {
        setValue(0);
    };

    return (
        <>
          <h1>{value}</h1>
          <button onClick={updateHandler}> Update </button>
          <button onClick={decreaceHandler}> Decrease </button>
          <button onClick={resetHandler}> reset </button>

        </>
    );
};
export default StateComp;