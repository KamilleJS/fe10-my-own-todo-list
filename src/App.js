import './App.css'
import {useState} from "react";
import List from "./List";

function App() {
    const initialList = [
        {id: 1, title: 'learn JS', status: 'undone'},
        {id: 2, title: 'learn React', status: 'undone'},
        {id: 3, title: 'find job', status: 'undone'}
    ]

    const [list, setList] = useState(initialList);

    return (
        <div>
            <h2>Todo list</h2>
            <List list={list}/>
        </div>
    );
}

export default App;
