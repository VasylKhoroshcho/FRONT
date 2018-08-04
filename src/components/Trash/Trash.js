import React, { Component } from 'react';

import './Trash.css';
import trashIcon from '../../trash.png';


class Trash extends Component {
  constructor(props) {
    super(props);
  }
  _allowDrop(e) {
    e.preventDefault();
  }

  render() {
    let classes = this.props.dragging ? 'trash active' : 'trash';

    return (
      <div className={classes}>
        <img
          src={trashIcon}
          onDragOver={e => this._allowDrop(e)}
          onDrop={this.props.drop}
        />
      </div>
    );
  }
};

export default Trash;
