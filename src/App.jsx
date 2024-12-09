import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ListGroup from './components/ListGroup';
import H1 from './components/H1';
import Form from './components/Form';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({
    todo: {},
    isEdit: false,
  });

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleEdit = (todo) => {
    setEdit({
      todo: todo,
      isEdit: true,
    });
  };

  const updateTodo = (id, text) => {
    const updatedTodo = { id, text };
    setTodos(
      todos.map((item) => (item.id === id ? updatedTodo : item))
    );
    setEdit({ todo: {}, isEdit: false }); // Reset after updating
  };

  function addTodo(text) {
    const newTodo = {
      id: crypto.randomUUID(),
      text: text,
    };
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="Navbar">
      <NavBar />

      <div className="container">
        <H1 />
        <Form addTodo={addTodo} edit={edit} updateTodo={updateTodo} />
        <ListGroup
          todos={todos}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default App;