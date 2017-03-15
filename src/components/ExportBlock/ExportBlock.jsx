import React, { Component, PropTypes} from 'react';

import './export-block.scss';

export default class ExportBlock extends Component {
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

  render() {
    const sassBtnClass = this.state.sass ? 'export-block__btn export-block__btn--active' : 'export-block__btn';
    const lessBtnClass = this.state.less ? 'export-block__btn export-block__btn--active' : 'export-block__btn';

    return (
      <div className="export-block">
        <div className="export-block__btns">
          <button className={sassBtnClass} onClick={() => { this.handleClick('sass'); }}>Sass</button>
          <button className={lessBtnClass} onClick={() => { this.handleClick('less'); }}>Less</button>
        </div>
        <ul className="export-block__list">
          <li className="export-block__item">
            <span className="export-block__variable">{`${this.state.preproc} color-0`}</span> &nbsp;
            #ff0000
          </li>
        </ul>
      </div>
    );
  }
}
