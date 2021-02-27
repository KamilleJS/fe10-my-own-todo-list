import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {useState} from "react";
import List from "./List";

function App() {
    const initialList = [
        {id: 1, title: 'Learn JS', status: 'undone'},
        {id: 2, title: 'Learn React', status: 'undone'},
        {id: 3, title: 'Find job', status: 'undone'}
    ]

    const [list, setList] = useState(initialList);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        const newTodo = {
            id: Math.random(),
            title: inputValue,
            status: 'undone'
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

    return (
        <div>
            <h2>Todo list</h2>
            <input onChange={inputChange} value={inputValue} type="text"/>
            <button onClick={addTodo} type="button" className="btn btn-secondary btn-sm">Add todo</button>
            <List list={list} deleteTodo={deleteTodo}/>
        </div>
    );
}

export default App;
