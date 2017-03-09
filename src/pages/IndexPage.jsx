import React from 'react';
import { ColorPicker, Panel } from 'components';

const IndexPage = () => (
  <div className="index-page">
    <ColorPicker />
    <Panel title={ 'hello' } />
  </div>
);

export default IndexPage;
