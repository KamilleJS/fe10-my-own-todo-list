import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

function Todo(props) {

    const {todo = {}} = props;

    return (
        <div>
            {todo.title}
            {' '}
            <button onClick={() => props.deleteTodo(todo.id)} type="button" className="btn btn-outline-dark btn-sm">delete</button>
            <button  type="button" className="btn btn-outline-dark btn-sm">update</button>
        </div>
    );
}

export default Todo;
