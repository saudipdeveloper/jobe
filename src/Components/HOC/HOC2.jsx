const HOC2 = (props) => {
    return (
        <div className="container bg-info mb-2">
            <header className="bg-bg-waring text-center h1">
               Higher Order Component 2
            </header>
            <props.name />
          <form>
            <fieldset>
                <legend>React HOC Comp</legend>
                <label>Email:- </label>
                <input type="text" id="f1" />
                <br />
                <br />
                <label>Password :- </label>
                <input type="text" id="f2" />
            </fieldset>
          </form>
        </div>
    );
};

export default HOC2;