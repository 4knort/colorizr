import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { PreviewTable, ExportBlock } from 'components';
import * as colorActions from '../actions/colorActions';

const ExportPage = () => {
  return (
    <div className="export-page">
      <div className="container">
        <h1>Customize and Export colors for Sass or Less</h1>
        <PreviewTable />
        <ExportBlock />
      </div>
    </div>
  );
};

ExportPage.propTypes = {

};

export default connect(state => ({
  chosenColorsGroup: state.colorReducer.chosenColorsGroup,
}), colorActions)(ExportPage);
