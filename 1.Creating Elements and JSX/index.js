import React from 'react'
import ReactDOM from 'react-dom'

const people = [
    { name: 'Tyler' },
    { name: 'Karen' },
    { name: 'Richard' }
]

/* Note: Add key prop is required.
const element = React.createElement('ol', null,
    people.map((person) => (
        React.createElement('li', { key: person.name }, person.name)
    ))
)
*/

// Refactoring Version
const element = <ol>
    {people.map((person) => (
        <li key={person.name}>{person.name}</li>
    ))}
</ol>


ReactDOM.render(
    element,
    document.getElementById('root')
)