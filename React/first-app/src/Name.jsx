import React from 'react';

function Name (props){

    return(
        <>
        <h1 className='heading'>Name : {props.name}  </h1>
        <h2>Age : {props.age} </h2>
        <h3>Email : {props.email}</h3>

           
        </>
    )
}

export default Name;
