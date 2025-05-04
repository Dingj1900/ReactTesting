import { useState } from "react";

const ChangeState = ()=>{
    const [type, setType] = useState("Int");

    return (
        <div>
            <div>
                <button onClick={ () => setType("Int")}>Int</button>
                <button onClick={ () => setType("Double")}>Double</button>
                <button onClick={ () => setType("Float")}>Float</button>
            </div>
            <div>
                <h1>
                    {type}
                </h1>
            </div>
        </div>
    );
};

export default ChangeState;

