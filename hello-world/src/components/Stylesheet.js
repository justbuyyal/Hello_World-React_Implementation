import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font-xl`}>Stylesheet</h1>
        </div>
    )
}
<h1>Stylesheet</h1>
export default Stylesheet
