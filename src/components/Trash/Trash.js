import React from 'react';

import './Trash.css';
import trashIcon from '../../trash.png';

const trash = props => {
  return (
      <div className="trash">
        <img src={trashIcon} />
      </div>
  );
};

export default trash;
