import React, { Component } from 'react';

import './App.css';

import Trash from './components/Trash/Trash';
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';
import UploadModal from './components/UploadModal/UploadModal';
import BluredBackground from './components/BluredBackground/BluredBackground';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      needRefresh: false,
      dragging: false
    };

    this._dropHandler = this._dropHandler.bind(this);
    this._dragToggler = this._dragToggler.bind(this);
    this._changePageStatus = this._changePageStatus.bind(this);
    this._toggleSidebarHandler = this._toggleSidebarHandler.bind(this);
    this._bluredBackgroundHandler = this._bluredBackgroundHandler.bind(this);
  }

  _toggleSidebarHandler() {
    this.setState(prevState => ({ modalOpen: !prevState.modalOpen }));
  }

  _bluredBackgroundHandler() {
    this.setState({ modalOpen: false });
    this.setState({ needRefresh: true });
  }

  _dragToggler() {
    this.setState(prevState => ({ dragging: !prevState.dragging }));
  }

  _dropHandler(e) {
    fetch(`${process.env.REACT_APP_URL}/api/v1/delete?id=${e.dataTransfer.getData('id')}`, {
      method: 'DELETE',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => this.setState({ needRefresh: true }));
  }

  _changePageStatus() {
    this.setState({ needRefresh: false });
  }

  render() {
    const { modalOpen, needRefresh, dragging } = this.state;
    let bluredBackground;

    if (modalOpen) {
      bluredBackground = <BluredBackground click={this._bluredBackgroundHandler} />;
    }

    return (
      <div className="app">
        <Navbar hamburgerHandler={this._toggleSidebarHandler} />
        {bluredBackground}
        <main>
          <Gallery
            dragToggler={this._dragToggler}
            needRefresh={needRefresh}
            changePageStatus={this._changePageStatus}
          />
          <Trash dragging={dragging} drop={this._dropHandler} />
          <UploadModal close={this._bluredBackgroundHandler} opened={modalOpen} />
        </main>
      </div>
    );
  }
}

export default App;
