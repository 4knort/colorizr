import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { PreviewTable, ExportBlock } from 'components';
import * as colorActions from '../actions/colorActions';

import './css/pages.scss';

@connect(state => ({
  exportGroup: state.colorReducer.exportGroup,
}), colorActions)
export default class ExportPage extends Component {
  static propTypes = {
    exportGroup: PropTypes.arrayOf(PropTypes.object).isRequired,
    createExportGroup: PropTypes.func.isRequired,
    changeVarName: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.createExportGroup();
  }

  handleChange = (value, id) => {
    this.props.changeVarName(value, id)
  }
  render() {
    return (
      <div className="export-page">
        <div className="container">
          <h1>Customize and Export colors for Sass or Less</h1>
          <PreviewTable changeVarName={(value, id) => { this.handleChange(value, id); }} exportGroup={this.props.exportGroup} />
          <ExportBlock exportGroup={this.props.exportGroup} />
        </div>
      </div>
    );
  }
}
