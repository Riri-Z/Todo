import React from 'react';

import NavbarComponent from './components/Navbar';
import Container from '@material-ui/core/Container';
import TaskContextProvider from './contexts/TaskContext';
import TodoListComponent from './components/TodoList';

function App() {
  return (
    <Container maxWidth="md">
      <TaskContextProvider>
        <NavbarComponent></NavbarComponent>
        <TodoListComponent></TodoListComponent>
      </TaskContextProvider>
    </Container>
  );
}

export default App;