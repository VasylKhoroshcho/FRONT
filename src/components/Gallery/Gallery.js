import React from "react";
import PropTypes from "prop-types";

import './Spiner.css';
import './Gallery.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      images: null
    };
  }

  async componentDidMount() {
    await fetch('http://127.0.0.1:1437/api/v1/images', {
      method: 'GET',
      crossDomain:true,
      headers: {
          'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => this.setState({ images: data }));

    this.setState({ loading: false });
  }

  renderSpinner() {
    return <div className="gallery__spinner"><div></div><div></div></div>;
  }

  renderImage() {
    let columns = [[], [], [], []];

    this.state.images.reduce((place, image) => {
      let result = place + 1;

      columns[place].push(image);

      if (result > 3) return 0;

      return result;
    }, 0)
    return (
      <div className="gallery__row">
        <div className="gallery__column">
          {columns[0].map(url => <img draggable="true" src={url.url} />)}
        </div>
        <div className="gallery__column">
          {columns[1].map(url => <img draggable="true" src={url.url} />)}
        </div>
        <div className="gallery__column">
          {columns[2].map(url => <img draggable="true" src={url.url} />)}
        </div>
        <div className="gallery__column">
          {columns[3].map(url => <img draggable="true" src={url.url} />)}
        </div>
      </div>
    );
  }

  render() {
    let images = this.state.loading ? this.renderSpinner() : this.renderImage();

    return (
      <div className="gallery">
        {images}
      </div>
    );
  }
}

export default Gallery;
