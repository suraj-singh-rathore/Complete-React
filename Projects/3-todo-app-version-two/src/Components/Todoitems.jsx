import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css"

const Todoitems = ({todoitems}) => {
    return ( 
    <div className={styles.itemsContainer}>
        {todoitems.map(item=> <ToDoItem todoDate={item.dueDate}
        todoName={item.Name}></ToDoItem>)}
     </div>
    );
}

export default Todoitems;