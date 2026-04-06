import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const Greetings = () => {
    return (
        <div>
            <h1>Welcome Justin Timberlake</h1>
            <div id="image"></div>
        </div>
    )
}

const root = createRoot(document.getElementById('target'))

root.render (
    <Greetings />
)
/*import _ from 'lodash';

function component () {
    const element = document.createElement('div');
    element.innerHTML = _.join(["Hello", "Justin Timberlake"], " ");

    return element;
}

document.body.appendChild(component());*/

