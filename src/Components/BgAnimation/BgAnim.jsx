import React from 'react'
import './BgAnim.scss'

function BgAnim({text}) {
    return (
            <div class="m-scroll__title">
                <div>
                    <h1>{text}</h1>
                    <h1>{text}</h1>
                </div>
            </div>
    )
}

export default BgAnim
