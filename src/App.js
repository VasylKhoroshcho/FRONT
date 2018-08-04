import React, { Component } from 'react';

import './App.css';

import Navbar from './components/Navbar/Navbar'
import SidePanel from './components/Sidebar/SidePanel'
import BluredBackground from './components/BluredBackground/BluredBackground'
import Gallery from './components/Gallery/Gallery'
import Trash from './components/Trash/Trash'

const urls = [
  "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2014/11/calico.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2014/11/calico.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2014/11/calico.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2014/11/calico.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2014/11/calico.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2014/11/calico.jpg","http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2014/11/calico.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2014/11/calico.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2014/11/calico.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2014/11/calico.jpg","http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2014/11/calico.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2014/11/calico.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2014/11/calico.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2014/11/calico.jpg",
  "http://catsatthestudios.com/wp-content/uploads/2014/11/calico.jpg"
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      dragging: false
    };
  }

  _toggleSidebarHandler () {
    this.setState(prevState => ({ sidebarOpen: !prevState.sidebarOpen }));
  }

  _bluredBackgroundHandler () {
    this.setState({ sidebarOpen: false });
  }

  _dragHandler () {
    this.setState({ dragging: true });
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
          <Gallery imageUrls={urls} drag={this._dragHandler.bind(this)}/>
          <Trash />
        </main>
      </div>
    );
  }
}

export default App;
