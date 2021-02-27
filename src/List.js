import './App.css'
import Todo from "./Todo";

function List(props) {

    const {list = []} = props;

    return (
        <div>
            {list.map(el =>
                <Todo key={el.id}
                      todo={el}
                      deleteTodo={props.deleteTodo}
                      updateTodo={props.updateTodo}
                />
            )}
        </div>
    );
}

export default List;
