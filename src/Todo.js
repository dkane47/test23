import React from 'react';

// JavaScript (JSX)
function Todo() {
    const [todos, setTodos] = React.useState([]);
    const [inputValue, setInputValue] = React.useState("");
  
    const handleAddTodo = () => {
      if (inputValue) {
        setTodos([...todos, inputValue]);
        setInputValue("");
      }
    };
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={handleAddTodo}>Add Todo</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }


export default Todo;
