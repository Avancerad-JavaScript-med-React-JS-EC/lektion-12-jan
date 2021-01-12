import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//import Name from './name';
import TodoItem from './todoItem';
import AddTodo from './addTodo';

//Måste alltid starta med en stor bokstav för att React ska veta att det är en komponent
//Parenteser efter return används för att kunna skriva på fler rader
class App extends Component {
    constructor(props) {
        super(props);
        console.log('this.props är: ', this.props);
        this.state = {
            todos: [
                { todo: 'Köp kaffe' },
                { todo: 'Köp kaka' },
                { todo: 'Brygg kaffe' },
                { todo: 'Fika' }
            ],
            latestTodo: ''
        }

        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(todo) {
        console.log('Ny todo: ', todo);

        //prevState hämtar ditt nuvarande state och concat mergar din nuvarande todos array med din senaste todo och
        //returnerar en helt ny array som du uppdaterar ditt state med
        this.setState((prevState) => ({
            todos: prevState.todos.concat(todo)
        }));
    }

    updateLatestTodo(todo) {
        this.setState({ latestTodo: todo });
    }

    render() {
        return (
            <section className="wrapper">
                <h1>{ this.props.title }</h1>
                <ul className="todo-list">
                    <TodoItem text={ this.state.todos[0] } done={false} />
                    <TodoItem text={ this.state.todos[1] } done={true} />
                    <TodoItem text={ this.state.todos[2] } done={false} />
                    <TodoItem text={ this.state.todos[3] } done={false} />
                </ul>
                <AddTodo buttonText="Lägg till" updateState={ this.addTodo } />
            </section>
        )
    }
}


ReactDOM.render(<App title="Todo" />, document.getElementById('root'));