import { useParams } from "react-router-dom"

const DynamicUser = () => {
    const parameter = useParams()
    const {place} = parameter;
    return (
        <>
          <h1>Hey!! I am Learning Routing</h1>
          <h2>
            <em>{place}</em>
          </h2>
          <em>{place} is a very nice visit</em>
        </>
    );
};
export default DynamicUser;