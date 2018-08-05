import React, { Component } from 'react';

import './App.css';

import Trash from './components/Trash/Trash'
import Navbar from './components/Navbar/Navbar'
import Gallery from './components/Gallery/Gallery'
import UploadModal from './components/UploadModal/UploadModal'
import BluredBackground from './components/BluredBackground/BluredBackground'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      needRefresh: false,
      dragging: false
    };
  }

  _toggleSidebarHandler() {
    this.setState(prevState => ({ modalOpen: !prevState.modalOpen }));
  }

  _bluredBackgroundHandler() {
    this.setState({ modalOpen: false });
  }

  _dragToggler() {
    this.setState(prevState => ({ dragging: !prevState.dragging }));
  }

  _dropHandler(e) {
    fetch(`${process.env.api_url}/api/v1/delete?id=${e.dataTransfer.getData("id")}`, {
      method: 'DELETE',
      crossDomain:true,
      headers: {
          'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => this.setState({needRefresh: true}));
  }

  _changePageStatus() {
    this.setState({needRefresh: false})
  }

  render() {
    if (this.state.modalOpen) {
      var bluredBackground = <BluredBackground  click={this._bluredBackgroundHandler.bind(this)} />
    }

    return (
      <div className="app">
        <Navbar hamburgerHandler={this._toggleSidebarHandler.bind(this)} />
        {bluredBackground}
        <main>
          <Gallery
            dragToggler={this._dragToggler.bind(this)}
            needRefresh={this.state.needRefresh}
            changePageStatus={this._changePageStatus.bind(this)}
          />
          <Trash dragging={this.state.dragging} drop={this._dropHandler.bind(this)} />
          <UploadModal opened={this.state.modalOpen}/>
        </main>
      </div>
    );
  }
}

export default App;
