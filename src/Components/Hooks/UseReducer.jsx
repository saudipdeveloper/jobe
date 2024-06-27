import { useReducer } from "react"
    
    const reducer = (value, action) => {
        switch (action) {
            case 'Incre':
                return value + 5;
            case 'Decre':
                return value - 5;
            case 'reset':
                return 0;       
        }
    };

    
const UseReducer = () => {
    //  const [value, setValue] = useSate(0);
    const [value, dispatch] = useReducer(reducer, 5);

    return (
        <>
        <h1>Learning useReducer Hook</h1>
        <h1>
            <em>{value}</em>
        </h1>

        <button onClick={() => dispatch('Incre')}>Increase</button>
        <button onClick={() => dispatch('Decre')}>Decreament</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
        </>
    );
};


export default UseReducer;