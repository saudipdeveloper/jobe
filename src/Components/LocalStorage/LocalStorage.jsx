import { useState } from "react";

const Localstorage =() => {
    const [data, setData] = useState('');
    
    const handleDataSave = () => {
        localStorage.setItem('key',data);
        console.log(data);
    };

    const handleDataGet = () => {
        const getData = localStorage.getItem('key');
        if(getData) {
            document.getElementById('f1').value = getData;
        } else {
            document.getElementById('f1').value = '';
            document.getElementById('s1').innerHTML = 
            'There is no local storage'
        }
    };
    const handleDataRemove = () => {
        localStorage.removeItem('key');
    };

    return (
        <>
          <h1>
            <em>Hey!!! This is Local Storage Basics</em>
            <br />
            <br />
            <label>Data : </label>
            <input type="text" placeholder="enter your value"
            onChange={(e) => setData(e.target.value)}
             />
             <button onClick={handleDataSave}>Save</button>
             <br />
             <br />
             <button onClick={handleDataGet}>Get Data</button>
             <input type="text" readOnly placeholder="get data" id="f1" />
             <em id="s1"></em>
             <br />
             <br />
             <button onClick={handleDataRemove}>Remove Data</button>
          </h1>
        </>

    );
};
export default Localstorage;