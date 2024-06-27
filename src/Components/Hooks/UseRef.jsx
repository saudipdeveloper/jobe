import { useRef } from "react";

const UseRef = () =>{
    const kolkata = useRef(null);

    const handleRef = () => {
        kolkata.current.focus();
    };

    return (
        <>
         <h1>This is UseRef</h1>
         <input type="text" placeholder="Enter Your Data" ref={kolkata} />
         <br />
         <button onClick={handleRef}>Show</button>
        </>
    );
};

export default UseRef;