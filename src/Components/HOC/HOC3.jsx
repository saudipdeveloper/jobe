const HOC3 = (props) => {
    return (
        <div className="container bg-info mb-2">
            <header className="bg-bg-waring text-center h1">
               Higher Order Component 3
            </header>
            <props.ejob />
        </div>
    );
};

export default HOC3;