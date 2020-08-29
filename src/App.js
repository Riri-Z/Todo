import React from 'react';

import NavbarComponent from './components/Navbar';
import Container from '@material-ui/core/Container';
import TaskContextProvider from './contexts/TaskContext';
import TodoListComponent from './components/TodoList';
import styled from 'styled-components';
import background from './pictures/sport.png';

const Content = styled.div`
    background-color : #85DCB;
    background-image: url(${background});
    min-height: 60vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover ;
    height: 960px;
    padding-top: 10vh;
    background-attachment: fixed;
    
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