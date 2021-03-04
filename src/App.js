import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {useState} from "react";
import List from "./List";

function App() {
    const initialList = [
        {id: 1, title: 'Learn JS', done: false},
        {id: 2, title: 'Learn React', done: false},
        {id: 3, title: 'Find job', done: false}
    ]

    const [list, setList] = useState(initialList);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        const newTodo = {
            id: Math.random(),
            title: inputValue,
            done: false
        }
        const newList = [...list, newTodo];
        setList(newList);
        setInputValue('');
    }

    const deleteTodo = (todoId) => {
        const newList = list.filter(el => el.id !== todoId);
        setList(newList);
    }

    const inputChange = (e) => {
        setInputValue(e.target.value);
    }

    const updateTodo = (todoId) => {
        const newList = list.map(el => {
            if (el.id === todoId) return {...el, done: !el.done}
            return el;
        })
        setList(newList);
    }

    return (
        <div>
            <h2>Todo list</h2>
            <input onChange={inputChange} value={inputValue} type="text"/>
            <button onClick={addTodo} type="button" className="btn btn-secondary btn-sm">Add todo</button>
            <List list={list} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
        </div>
    );
}

export default App;
