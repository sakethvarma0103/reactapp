import React from "react";

function Content(props)
{
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.cont}</p>
        </div>
    );
}

export default Content;