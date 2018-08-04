import React from 'react';

import './BluredBackground.css';

const sidePanel = props => {
  return (
    <div className="blured-background" onClick={props.click} />
  );
};

export default sidePanel;
