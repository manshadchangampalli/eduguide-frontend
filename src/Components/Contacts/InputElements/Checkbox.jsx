import React from 'react'

function Checkbox({classNames,text}) {
    return (
        <div className={classNames}>
            <input type="checkbox"/>
            <span> {text}</span>
        </div>
    )
}

export default Checkbox
