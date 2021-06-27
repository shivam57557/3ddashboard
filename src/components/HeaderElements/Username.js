import React from 'react';
import '../CSS/Username.css'

const Username = (props) => {
    return (
        <div className="username">
            <p>{`${props.firstName} ${(props.lastName).toUpperCase()}`}</p>
            <p className="name--initials">
                {props.firstName[0].toUpperCase() + props.lastName[0].toUpperCase()}
            </p>
        </div>
    )
}


export default Username;
