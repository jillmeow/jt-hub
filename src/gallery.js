import React from 'react'
import { createRoot } from 'react-dom/client'

const Gallery = () => {
    return (
        <div>
            <h1>Gallery</h1>
            <div id="image"></div>
        </div>
    )
}

const root = createRoot(document.getElementById('target'))

root.render (
    <Gallery />
)