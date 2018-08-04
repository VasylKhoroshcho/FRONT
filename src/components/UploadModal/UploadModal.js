import React, { Component } from 'react';

import './UploadModal.css';


class UploadModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classes = this.props.modalActive ? 'upload-modal open' : 'upload-modal open';

    return (
      <div className={classes}>

      </div>
    );
  }
};

export default UploadModal;
