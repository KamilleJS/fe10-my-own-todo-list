import './App.css'

function Todo(props) {

    return (
        <div>
            {props.todo.title}
        </div>
    );
}

export default Todo;
