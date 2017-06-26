import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { PreviewTable, ExportBlock } from 'components';
import * as colorActions from '../actions/colorActions';

import './css/pages.scss';

@connect(state => ({
  colors: state.colorReducer.colors,
}), colorActions)
export default class ExportPage extends Component {
  static propTypes = {
    colors: PropTypes.objectOf(React.PropTypes.array).isRequired,
    createExportGroup: PropTypes.func.isRequired,
    changeVarName: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.createExportGroup();
  }

  handleChange = (value, id) => {
    this.props.changeVarName(value, id);
  }
  
  render() {
    return (
      <div className="export-page">
        <div className="container">
          <h1 className="export-page__title">Customize and Export colors for Sass or Less</h1>
          <PreviewTable changeVarName={this.handleChange} colors={this.props.colors} />
          <ExportBlock colors={this.props.colors} />
        </div>
      </div>
    );
  }
}
