import React, { Component, PropTypes } from 'react';

import './export-block.scss';

export default class ExportBlock extends Component {
  static propTypes = {
    colors: PropTypes.objectOf(React.PropTypes.array).isRequired,
  }
  state = {
    preproc: '$',
    sass: true,
    less: false,
  }

  handleClick(btn) {
    if (btn === 'sass') {
      this.setState({
        preproc: '$',
        sass: true,
        less: false,
      });
    } else {
      this.setState({
        preproc: '@',
        sass: false,
        less: true,
      });
    }
  }

  sassBtnClick = () => {
    this.setState({
      preproc: '$',
      sass: true,
      less: false,
    });
  }

  lessBtnClick = () => {
    this.setState({
      preproc: '@',
      sass: false,
      less: true,
    });
  }
  
  render() {
    const sassBtnClass = this.state.sass
      ? 'export-block__btn export-block__btn--active'
      : 'export-block__btn';
    const lessBtnClass = this.state.less
      ? 'export-block__btn export-block__btn--active'
      : 'export-block__btn';

    const listItems = this.props.colors.exportGroup.map((item, index) => {
      return (
        <li key={`listItem-${index}`} className="export-block__item">
          <span className="export-block__variable">{`${this.state.preproc}${item.variable}: `}</span>
          {item.color};
        </li>
      );
    });

    if (!this.props.colors.exportGroup.length) { return null; }

    return (
      <div className="export-block">
        <h2 className="export-block__title">Export your code</h2>
        <div className="export-block__btns">
          <button className={sassBtnClass} onClick={ this.sassBtnClick }>Sass</button>
          <button className={lessBtnClass} onClick={ this.lessBtnClick }>Less</button>
        </div>
        <ul className="export-block__list">
          {listItems}
        </ul>
      </div>
    );
  }
}
