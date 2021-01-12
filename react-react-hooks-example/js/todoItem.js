import React, { useState } from 'react';

function TodoItem(props) {
    console.log('Props är ', props);
    const [done, setDone] = useState(props.done);

    function handleClick() {
        setDone(done => !done)
    }

    return (
        <li 
            className="todo-item"
            onClick = { handleClick }>
            { props.text.todo } - { done }
        </li>
    )
}

export default TodoItem;