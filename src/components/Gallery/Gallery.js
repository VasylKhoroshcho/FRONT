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

  componentDidMount() {
    this._fetchImages();
  }

  _fetchImages() {
    fetch('http://127.0.0.1:1437/api/v1/images', {
      method: 'GET',
      crossDomain:true,
      headers: {
          'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ images: data })
      this.setState({ loading: false });
    });
  }

  _dragStart(e) {
    e.dataTransfer.setData("id", e.target.dataset.id);
  }

  _renderSpinner() {
    return <div className="gallery__spinner"><div></div><div></div></div>;
  }

  _renderImages() {
    let columns = [[], [], [], []];

    this.state.images.reduce((place, image) => {
      let result = place + 1;

      columns[place].push(image);

      if (result > 3) return 0;

      return result;
    }, 0)

    return (
      <div className="gallery__row">
        {columns.map(column =>
          <div className="gallery__column">
            {column.map(img =>
              <img
                draggable="true"
                data-id={img.id}
                onDragStart={e => (this._dragStart(e), this.props.dragToggler())}
                onDragEnd={e => this.props.dragToggler()}
                src={img.url}
              />
            )}
          </div>
        )}
      </div>
    );
  }

  render() {
    let images = this.state.loading ? this._renderSpinner() : this._renderImages();

    if(this.props.needRefresh) {
      this._fetchImages();
      this.props.changePageStatus();
    }

    return (<div className="gallery">{images}</div>);
  }
}

export default Gallery;
