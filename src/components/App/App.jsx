import React, { PropTypes } from 'react';
import { Header, Container } from 'components';

const App = ({ children }) => (
  <div className="app">
    <Header />
    <Container>
      {children}
    </Container>
  </div>
);

App.propTypes = {
  children: PropTypes.any.isRequired,
};

export default App;
