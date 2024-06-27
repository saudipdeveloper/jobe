import { useEffect, useState } from "react";


const ChildCallBack = ({ action }) => {
    const [value, setValue] = useState(9);

    useEffect(()=> {
        const ramiz = action(0);
        setValue(ramiz);
    }, [action]);

    return (
        <>
          <h3>Child Component of useCallBack hook</h3>
        <em>
            <h1>{value}</h1>
        </em>
        
        
        </>
    );
};

export default ChildCallBack;