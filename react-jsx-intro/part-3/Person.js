const Person = (props) => {
    return (
        <div>
            <p>Learn some information about this person</p>
            <p>Name: {props.name.slice(0, 6)}</p>
            <p>Age: {props.age}</p>
            <h3>{props.age > 18 ? "please go vote!" : "you must be 18"}</h3>
            <p>Hobbies:</p>
            <ul>
                {props.hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </div>
    );
}