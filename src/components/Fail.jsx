import React from 'react'

function Fail() {
    function again(e){
        if(!e || e.key === "Enter" || e.key === " "){
            window.location = "game"
        }
    }
    window.document.addEventListener('keypress',e => again(e))
    return (
        <div>
            <title>Game over</title>
            <h1>Game over</h1>
            <button onClick={()=> again(null)}>Try again.</button>
        </div>
    )
}

export default Fail
