const HOC1 = (props) => {
    return (
        <div className="container bg-info mb-2">
            <header className="bg-bg-waring text-center h1">
               Higher Order Component 1
            </header>
            <props.kolkata />
            <p className="cursive">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure ut labore earum deserunt esse nemo deleniti? Cum tempore ratione dolorem amet recusandae nisi ipsam sunt, quos repudiandae eum! Dolores.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam pariatur, explicabo facilis ab magnam ipsa dolorum, laborum harum recusandae ipsam quia ipsum facere dolore architecto distinctio, quibusdam amet quaerat. Autem.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sapiente in assumenda a, repellat ad earum eaque, sequi unde magni quo eum ea inventore! Quam, quo. Nam eveniet beatae unde.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo suscipit laboriosam odit praesentium quidem fugit at veniam, culpa est modi ex sequi dolores deserunt ducimus ad nesciunt repudiandae mollitia quia.

            </p>
        </div>
    );
};

export default HOC1;