const PopsFunc = (props) => {
    return (
        <>
        {/* <h2>
            <em> My Course name is {props.course} and the duration of this course is{' '}
             {props.duration} months
            </em>   
        </h2> */}

        <h2>
            <em> My Course name is {props.course} and the duration of this course is{' '}
             {props.duration} months , {props.require} {props.random}
            </em>   
        </h2>


            </>
    )
}
export default PopsFunc;