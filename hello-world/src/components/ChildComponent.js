import React from 'react'

function ChildComponent(seken) {
    return (
        <div>
            <button onClick = {() => seken.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
