import './App.css'
import Todo from "./Todo";

function List(props) {

    const {list} = props;

    return (
        <div>
            {list.map(el =>
                <Todo todo={el}/>
            )}
        </div>
    );
}

export default List;
