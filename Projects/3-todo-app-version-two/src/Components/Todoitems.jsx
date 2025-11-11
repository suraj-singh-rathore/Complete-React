import ToDoItem from "./ToDoItem";

const Todoitems = ({todoitems}) => {
    return ( 
    <div className="items-container">
        {todoitems.map(item=> <ToDoItem todoDate={item.dueDate}
        todoName={item.Name}></ToDoItem>)}
     </div>
    );
}

export default Todoitems;