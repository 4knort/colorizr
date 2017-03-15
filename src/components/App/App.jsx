import React, { PropTypes } from 'react';
import { Header, Footer } from 'components';

const App = ({ children }) => (
  <div className="app">
    <Header />
    {children}
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.any.isRequired,
};

export default App;
