import React, { Component } from 'react';

import './UploadModal.css';


class UploadModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      file: null,
      uploading: false,
      fillMessage: false
    };

    this._buttonHandler = this._buttonHandler.bind(this);
    this._handleFileInputChange = this._handleFileInputChange.bind(this);
    this._handleNameInputChange = this._handleNameInputChange.bind(this);
  }

  _handleFileInputChange(e) {
    this.setState({ file:  e.target.files[0] });
    this.setState({ fillMessage: false });
  }


  _handleNameInputChange(e) {
    this.setState({ name: e.target.value });
    this.setState({ fillMessage: false });
  }

  _buttonHandler() {
    const body  = new FormData();

    if(!this.state.name || !this.state.file) {
      this.setState({ fillMessage: true });

      return;
    }

    this.setState({ uploading: true })

    body.append('file', this.state.file, 'img');
    body.append('name', this.state.name);

    fetch(`${process.env.REACT_APP_URL}/api/v1/upload`, {
      method: 'POST',
      crossDomain:true,
      body
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ uploading: false })
      this.props.close()
    });
  }

  render() {
    let modalClasses = this.props.opened ? 'upload-modal open' : 'upload-modal';

    let messageClasses = this.state.fillMessage ? 'upload-modal__message active' : 'upload-modal__message';

    let buttonClasses = this.state.uploading ? 'upload-form__button' : 'upload-form__button active';

    let spinerClasses = this.state.uploading ? 'upload-modal__spinner active' : 'upload-modal__spinner';

    return (
      <div className={modalClasses}>
        <h1> Upload new image</h1>
        <div className="upload-form">
          <div className="upload-form__element">
              <label>File name:</label>
              <input
                type="text"
                id="name"
                onChange={this._handleNameInputChange}
              />
          </div>
          <div className="upload-form__element">
              <label>File:</label>
              <input
                type="file"
                id="image"
                onChange={this._handleFileInputChange}
                accept="image/png, image/jpeg"
              />
          </div>
          <span className={messageClasses}>All fields are required</span>
          <div className={spinerClasses}><div></div><div></div></div>
          <div className={buttonClasses}>
            <button onClick={this._buttonHandler}>UPLOAD</button>
          </div>
        </div>
      </div>
    );
  }
};

export default UploadModal;
