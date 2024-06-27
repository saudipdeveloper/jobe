import HOC1 from './HOC1';
import HOC2 from './HOC2';
import HOC3 from './HOC3';

import StateManagement from './StateManagement';

const HOCParent = () => {
    return (
        <>
        <HOC1 kolkata={StateManagement} />
        <HOC2 name={StateManagement} />
        <HOC3 ejob={StateManagement} />
        </>
        
    );
};

export default HOCParent;
