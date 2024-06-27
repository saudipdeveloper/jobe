import { useMemo, useState } from "react";


const UseMemo = () => {
    const [value , setValue]=useState(0);

    const callMemoshow = useMemo(() => {
        return Calculate(value);
    }, [value]);
    return (
        <>
         <h2>Learning UseMemo</h2>
         <input type="text" onChange={(e)=> setValue(e.target.value)} />
         <h1>
            <em>{callMemoshow}</em>
         </h1>
        
        </>
    )
};
export default UseMemo;

const Calculate =(x)=> {
    if(x < 5000) {
        for(var a=1;a<5000;a++){
            return x * 5;
        }
    } else {
        return <em>Enter a value less than 5000</em>
    }
}