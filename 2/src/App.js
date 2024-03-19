import React, { useState } from 'react';
import { Button, Container, Form, InputGroup, FormControl } from 'react-bootstrap';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Default Description', isEditing: false },
  ]);

  const addTask = (event) => {
    event.preventDefault();
    const newTaskDescription = event.target.elements.newTask.value;
    setTasks([...tasks, { id: tasks.length + 1, description: newTaskDescription, isEditing: false }]);
    event.target.elements.newTask.value = '';
  };

  const editTask = (taskId) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, isEditing: !task.isEditing } : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleEdit = (event, taskId) => {
    const updatedTaskDescription = event.target.value;
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, description: updatedTaskDescription } : task)));
  };

  return (
    <Container fluid className="p-3">
      <h1>Task Manager</h1>
      <Form onSubmit={addTask}>
        <InputGroup className="mb-3">
          <FormControl id="newTask" aria-describedby="addTask" placeholder="Add New Task" />
          <Button variant="primary" id="addTask" type="submit">
            Add
          </Button>
        </InputGroup>
      </Form>
      {tasks.map((task) => (
        <div key={task.id} className="d-flex justify-content-between mb-2">
          {task.isEditing ? (
            <FormControl
              aria-describedby="editTask"
              defaultValue={task.description}
              onBlur={(event) => handleEdit(event, task.id)}
            />
          ) : (
            <p>{task.description}</p>
          )}
          <div>
            <Button variant="warning" size="sm" onClick={() => editTask(task.id)}>
              Edit
            </Button>
            <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>
              Delete
            </Button>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default App;
