import React, { Children } from 'react';
import PropTypes from 'prop-types';

import SlideshowComponent from './slideshow-component';

class Slideshow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      total: 0,
      current : 0,
      contents: this.props.contents,
      defaultImagePath : '/assets/images/'
    }
    this.handlePrevButton = this.handlePrevButton.bind(this);
    this.handleNextButton = this.handleNextButton.bind(this);
  }
  
  componentWillReceiveProps(nextProps){
    const { total, current } = this.state;
    if(this.state.contents !== nextProps.contents)
      this.setState({ 
        contents: nextProps.contents,
        total: nextProps.contents.length,
        })
  }
  
  //if there is no image, show default 
  onImageError(e){
    (e)=>{e.target.src=`${this.state.defaultImagePath}no-image-available.jpg`}
  }
  
  //if there is no image property, show default
  handleImageError(content){
    return !!content.thumbnail ? `${this.state.defaultImagePath}${content.thumbnail}` : `${this.state.defaultImagePath}no-image-available.jpg`
  }
  
  handlePrevButton(e){
    e.preventDefault();
    
    const { total, current} = this.state;
    this.setState({
      current : current === 0 ? total - 1 : current - 1
    });
    
  }
  
  handleNextButton(e){
    e.preventDefault();
    const { total, current} = this.state;
    this.setState({
      current : current < total - 1 ? current + 1 : 0
    })
  }

  render () {
    const { contents } = this.props;
    let slideshowContent;
    
    if(contents){
      slideshowContent = contents.map((content, index) => {
        return(
            <SlideshowComponent
              slide={this.state.current === index} 
              key={index} 
              title={content.title} 
              imageSrc={`${this.state.defaultImagePath}${content.thumbnail}`} 
              description={content.description}
              onImageError={this.onImageError}
              handleImageError={this.handleImageError(content)}/>
          )
      });
    }
    return(
      <div className="slider">
        {slideshowContent}
        <div className="slider-control">
          <ul className="slider-control-wrapper">
            <li className="slider-control--left">
              <a href="#" className="slider-control-link" onClick={this.handlePrevButton}>
                <span className="icon icon-caret-left"></span> <span className="control-text control-text--prev">Prev</span>
              </a>
            </li>
            <li className="slider-control--right">
              <a href="#" className="slider-control-link" onClick={this.handleNextButton}>
                <span className="control-text control-text--next">Next</span> <span className="icon icon-caret-right"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Slideshow;