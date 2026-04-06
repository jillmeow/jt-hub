import React from 'react'
import { createRoot } from 'react-dom/client'

const About = () => {
    return (
        <div>
            <h1>About Justin Timberlake Hub</h1>
            <div id="image"></div>
        </div>
    )
}

const root = createRoot(document.getElementById('target'))

root.render (
    <About />
)