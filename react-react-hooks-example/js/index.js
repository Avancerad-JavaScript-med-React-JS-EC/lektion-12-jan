import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//import Name from './name';
import TodoItem from './todoItem';
import AddTodo from './addTodo';

//Måste alltid starta med en stor bokstav för att React ska veta att det är en komponent
//Parenteser efter return används för att kunna skriva på fler rader
function App(props) {
    const [todos, setTodos] = useState([
                    { todo: 'Köp kaffe' },
                    { todo: 'Köp kaka' },
                    { todo: 'Brygg kaffe' },
                    { todo: 'Fika' }
                ]);
    const [latestTodo, setLatestTodo] = useState('');

    function addTodo(todo) {
        //Med concat så skapar vi en ny array som vi använder för att uppdatera vårt state
        // const newTodosArray = todos.concat(todo);
        // console.log('newTodosArray: ', newTodosArray);
        // console.log('Current todos: ', todos);
        //setTodos(todos.concat(todo));

        // ... kallas för spread operatorn och kopierar din array med innehåll
        setTodos(todos => [...todos, todo]);
        setLatestTodo(todo.todo);
    }

    return (
        <section className="wrapper">
            <h1>{ props.title }</h1>
            <ul className="todo-list">
                { todos.map((todo, index) => {
                    console.log('Todo: ', todo);
                    console.log('Index: ', index);
                    return <TodoItem text={ todo } key={ index } done={false} />
                })}
                {/* <TodoItem text={ todos[0] } done={false} />
                <TodoItem text={ todos[1] } done={true} />
                <TodoItem text={ todos[2] } done={false} />
                <TodoItem text={ todos[3] } done={false} /> */}
            </ul>
            <p>Senast tillagd: { latestTodo }</p>
            <AddTodo buttonText="Lägg till" updateState={ addTodo }  />
        </section>
    )
}


ReactDOM.render(<App title="Todo" />, document.getElementById('root'));