import React, { PropTypes } from 'react';
import { Header, Container, Content } from 'components';

const App = ({ children }) => (
  <div className="app">
    <Header />
    <Content>
      <Container>
        {children}
      </Container>
    </Content>
  </div>
);

App.propTypes = {
  children: PropTypes.any.isRequired,
};

export default App;
