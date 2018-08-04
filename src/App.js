import React, { Component } from 'react';

import './App.css';

import Trash from './components/Trash/Trash'
import Navbar from './components/Navbar/Navbar'
import Gallery from './components/Gallery/Gallery'
import SidePanel from './components/Sidebar/SidePanel'
import UploadModal from './components/UploadModal/UploadModal'
import BluredBackground from './components/BluredBackground/BluredBackground'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      needRefresh: false,
      dragging: false
    };
  }

  _toggleSidebarHandler() {
    this.setState(prevState => ({ sidebarOpen: !prevState.sidebarOpen }));
  }

  _bluredBackgroundHandler() {
    this.setState({ sidebarOpen: false });
  }

  _dragToggler() {
    this.setState(prevState => ({ dragging: !prevState.dragging }));
  }

  _dropHandler(e) {
    fetch(`http://127.0.0.1:1437/api/v1/delete?id=${e.dataTransfer.getData("id")}`, {
      method: 'PUT',
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
    if (this.state.sidebarOpen) {
      var bluredBackground = <BluredBackground  click={this._bluredBackgroundHandler.bind(this)} />
    }

    return (
      <div className="app">
        <Navbar hamburgerHandler={this._toggleSidebarHandler.bind(this)} />
        <SidePanel show={this.state.sidebarOpen} />
        {bluredBackground}
        <main>
          <Gallery
            dragToggler={this._dragToggler.bind(this)}
            needRefresh={this.state.needRefresh}
            changePageStatus={this._changePageStatus.bind(this)}
          />
          <Trash dragging={this.state.dragging} drop={this._dropHandler.bind(this)} />
          <UploadModal />
        </main>
      </div>
    );
  }
}

export default App;
