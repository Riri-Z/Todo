import React from 'react';
import styled from 'styled-components'
import NavbarComponent from './components/Navbar';
import Container from '@material-ui/core/Container';
import TaskContextProvider from './contexts/TaskContext';
import TodoListComponent from './components/TodoList';

const Wrapper = styled.section`
  padding: 4em;
  background: #c1e5ff;
`;

function App() {
  return (
    <Wrapper>
      <Container fixed>
        <TaskContextProvider>
          <NavbarComponent />
          <TodoListComponent />
        </TaskContextProvider>
      </Container>
    </Wrapper>

  );
}

export default App;