import React from 'react';

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

  _renderSpinner() {
    return (
      <div className="gallery__spinner">
        <div />
        <div />
      </div>
    );
  }

  _dragStart(e) {
    e.dataTransfer.setData('id', e.target.dataset.id);
  }

  _fetchImages() {
    const { changePageStatus } = this.props;
    fetch(`${process.env.REACT_APP_URL}/api/v1/images`, {
      method: 'GET',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ images: data });
        this.setState({ loading: false });
        changePageStatus();
      });
  }

  _renderImages() {
    const columns = [[], [], [], []];
    const { images } = this.state;
    const { dragToggler } = this.props;

    images.reduce((place, image) => {
      const result = place + 1;

      columns[place].push(image);

      if (result > 3) return 0;

      return result;
    }, 0);

    return (
      <div className="gallery__row">
        {columns.map((column, i) => (
          <div className="gallery__column" key={i}>
            {column.map((img, i) => (<img
              key={i}
              draggable="true"
              alt={img.name}
              data-id={img.id}
              onDragStart={e => { this._dragStart(e); dragToggler(); }}
              onDragEnd={() => dragToggler()}
              src={img.url}
            />
            ))}
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    const { needRefresh } = this.props;
    const images = loading ? this._renderSpinner() : this._renderImages();

    if (needRefresh) this._fetchImages();

    return (
      <div className="gallery">
        {images}
      </div>
    );
  }
}

export default Gallery;
