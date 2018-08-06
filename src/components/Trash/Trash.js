import React, { Component } from 'react';

import './Trash.css';
import trashIcon from '../../trash.png';


class Trash extends Component {
  _allowDrop(e) {
    e.preventDefault();
  }

  render() {
    const { dragging, drop } = this.props;
    const classes = dragging ? 'trash active' : 'trash';

    return (
      <div className={classes}>
        <img
          src={trashIcon}
          alt="icon"
          onDragOver={e => this._allowDrop(e)}
          onDrop={drop}
        />
      </div>
    );
  }
}

export default Trash;
