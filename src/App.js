import React from 'react';

import NavbarComponent from './components/Navbar';
import Container from '@material-ui/core/Container';
import TaskContextProvider from './contexts/TaskContext';
import TodoListComponent from './components/TodoList';
import styled from 'styled-components';
import background from './img.png';

const Content = styled.div`
    
    background-image: url(${background});
    min-height: 960px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover ;
    height: 100%;
    padding-top: 20%;
    
`;

function App() {
  return (
    <Content>
      <Container>
        <TaskContextProvider>
          <NavbarComponent></NavbarComponent>
          <TodoListComponent></TodoListComponent>
        </TaskContextProvider>
      </Container>
    </Content >

  );
}

export default App;