import React,{useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect (() => {
    const filterHandler= () => {
      switch(status){
        case "completed":
          setFilteredTodos(todos.filter(toodo => todos.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter(toodo => todos.completed === false));
          break;
        default :
          setFilteredTodos(todos);
          break;
      }
    }

    filterHandler();
  }, [todos, status]);

  


  return (
    <div className="App">
    <header>
      <h1>Vatsalya's Todo List</h1>
    </header>
    <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        setStatus={setStatus}
  
      />
    <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}  />
    </div>
  );
}

export default App;
