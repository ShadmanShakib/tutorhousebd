import React from 'react'

interface ITitleText{
    text:string,
}
function TitleText({text}:ITitleText) {
    return (
        <h1 className="text-secondary text-3xl font-semibold text-center">
           {text} 
        </h1>
    )
}

export default TitleText
