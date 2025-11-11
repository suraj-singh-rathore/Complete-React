import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import "./App.css";
import Todoitems from "./Components/Todoitems";

function App() {
  const todoitems = [
    {Name : "Learn React", dueDate : "09/10/2025"},
    {Name : "Goto College", dueDate : "10/10/2025"},
    {Name : "play volleyball", dueDate : "11/10/2025"}
  ];

  return (
    <center className="todo-container">
     <AppName />
     <AddToDo />
     <Todoitems todoitems={todoitems}></Todoitems>
    </center>
  );
}

export default App;
