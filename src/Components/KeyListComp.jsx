import { useState } from "react";

const students = [
    { id: 1, name: 'saudip'},
    { id: 2, name: 'daliya'},
    { id: 3, name: 'kalyan'},
    { id: 4, name: 'kanad'},
    { id: 5, name: 'sri'},
    { id: 6, name: 'soumita'},
];

const KeyListComp = () => {
    const [data, setData] = useState();

    const removeHandler = () => {
        setData([]);
    };

    const showHandler = () => {
        setData(students);
    };

    return (
        <>
        <h1>This is the example of key and list</h1>
        {data ?(
            <>
            <ul>
               {data.map((e) => {
                return <li key={e.id}>{e.name}</li>;
                <button onClick={removeHandler}>Remove all</button>
               })} 
               
                </ul>
            </>
        ) : (
          <button onClick={showHandler}>Show all</button>
        )}
        
        </>
    );
}

export default KeyListComp;