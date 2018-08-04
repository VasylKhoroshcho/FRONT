import React from 'react';

import './SidePanel.css';

const sidePanel = props => {
  let sidePanelClass = props.show ? 'side-panel open' : 'side-panel'

  return (
      <nav className={sidePanelClass}>
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
        </ul>
      </nav>
  );
};

export default sidePanel;
