import React from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';
import classname from 'classnames';

const SlideshowComponent = ({title, slide, handleImageError, description, onImageError}) => {
  return (
    <div className={classname("slider-container", {"isActive" : slide})}>
      <div className="slider-thumbnail"><img onError={onImageError} src={handleImageError} alt={title} className="img-responsive"/></div>
      <div className="slider-content">
        <p className="slider-title">{title}</p>
        <p className="slider-description" >{Parser(description)}</p>
      </div>
    </div>
  )
}

export default SlideshowComponent;
