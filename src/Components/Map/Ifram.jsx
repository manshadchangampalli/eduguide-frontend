import React, { useState } from 'react'

function Iframe({src}) {

    
    return (
            <iframe
              src={src}
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
    )
}

export default Iframe
