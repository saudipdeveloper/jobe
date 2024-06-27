import { useCallback } from "react";
import { useState } from "react";
import ChildCallBack  from "./ChildCallBack";

const UseCallBack = () => {
    const [data, setData] = useState(5);

    const kolkata = useCallback(() => {
        return data;
    }, [data]);
    return (
        <>
           <h1>Learning UseCallBack</h1>
           <button onClick={() => setData(data + 2)}>Update Data</button>
           <ChildCallBack action={kolkata} />
        </>
    );
};

export default UseCallBack;