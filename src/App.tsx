import React, { Component } from 'react';
import styled from '../src/configs/styled-components'

class App extends Component {

  render() {
    const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red
  `;
    return (
      <Container>
      Hello
      </Container>
    );
  }
}

export default App;
