import './App.css'

function Todo(props) {

    return (
        <div>
            <ul>
                <li>{props.todo.title}</li>
            </ul>
        </div>
    );
}

export default Todo;
