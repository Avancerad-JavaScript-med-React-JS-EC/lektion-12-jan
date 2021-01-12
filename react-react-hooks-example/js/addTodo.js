import React from 'react';

function AddTodo(props) {

    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            console.log('Todo ', event.target.value);
            props.updateState({ todo: event.target.value });
        }
    }

    return (
        <section>
            <input type="text" placeholder="Skriv en todo" onKeyUp={ handleKeyUp } />
            {/* <button>{ props.buttonText }</button> */}
        </section>
    )
}

export default AddTodo;