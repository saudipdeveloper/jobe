import { useState } from "react"

const StateManagement =() => {
    const [value, setvalue] = useState(0);
    const increaseHandler = () => {
        setvalue(value + 5);
    };

    const decreaseHandler = () => {
        if(value >= 10){
            setvalue(value - 10);
        }else{
            setvalue(0);
        }
    };
    const resetHandler = () => {
        setvalue(0);
    }
    return (
         <div className="container bg-dark text-light text-center">
            <h1>{value}</h1>
            <button className="btn btn-success me-2" onClick={increaseHandler}>
                Increase
            </button>
            <button className="btn btn-warning me-2" onClick={decreaseHandler}>
                Decrease
            </button>
            <button className="btn btn-primary me-2" onClick={resetHandler}>
                Reset
            </button>
         </div>
    );
};

export default StateManagement;