import React from "react";
import PropTypes from "prop-types";

import './Spiner.css';
import './Gallery.css';

import BluredBackground from '../BluredBackground/BluredBackground'

function imagesLoaded(parentNode) {
  const imgElements = [...parentNode.querySelectorAll("img")];
  for (let i = 0; i < imgElements.length; i += 1) {
    const img = imgElements[i];
    if (!img.complete) {
      return false;
    }
  }
  return true;
}

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      drag: false
    };
  }

  handleImageChange = () => {
    this.setState({
      loading: !imagesLoaded(this.galleryElement)
    });
  };

  renderSpinner() {
    if (!this.state.loading) return null;

    return <div className="gallery__spinner"><div></div><div></div></div>;
  }

  renderImage(imageUrls, drag) {
    let columns = [[], [], [], []];

    imageUrls.reduce((place, image) => {
      let result = place + 1;

      columns[place].push(image);

      if (result > 3) return 0;

      return result;
    }, 0)
    return (
      <div class="gallery__row">
        <div class="gallery__column">
          {columns[0].map(url => <img draggable="true" src={url} />)}
        </div>
        <div class="gallery__column">
          {columns[1].map(url => <img draggable="true" src={url} />)}
        </div>
        <div class="gallery__column">
          {columns[2].map(url => <img draggable="true" src={url} />)}
        </div>
        <div class="gallery__column">
          {columns[3].map(url => <img draggable="true" src={url} />)}
        </div>
      </div>
    );
  }

  render() {
    if (this.state.drag) {
      var bluredBackground = <BluredBackground />
    }

    return (
      <div
        className="gallery"
        ref={element => {
          this.galleryElement = element;
        }}
      >
        {this.renderImage(this.props.imageUrls, this.props.drag)}
      {bluredBackground}
      </div>
    );
  }
}
Gallery.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Gallery;
