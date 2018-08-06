import React from 'react';

import './BluredBackground.css';

const sidePanel = props => {
  const { click } = props;
  return (
    <div className="blured-background" onClick={click} />
  );
};

export default sidePanel;
