import React, { Component } from 'react';

class Pane extends Component {
  render() {
    const { name, image, isDuplicate } = this.props;

    return (
      <div className={`Pane Pane--is-duplicate-${isDuplicate}`}>
        <div className="Pane__image-wrap">
          {image && <img className="Pane__image" src={`/images/${image}`} alt={name} />}
        </div>
        <h2>{name}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    );
  }
}

export default Pane;
