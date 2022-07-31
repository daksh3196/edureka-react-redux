import React from "react";

const Welcome = ({name}) =>{
    return(
        <div className="header">
            <h1>
                Welcome to {name} course by Edureka!
            </h1>
        </div>
    )
}

export default Welcome;