import React from 'react';

class SliderContainer extends React.Component {
  render () {
    let bodyContent = this.props.contents.map((content, index) => {
      return (<div className="slider-body" key={index}>
        <div className="slider-thumbnail"><img src={content.thumbnail} className="img-responsive"/></div>
        <div className="slider-content"> {content.description}</div>
      </div>)
    })
    
    return(
      <div className="slider slider-container">
        {bodyContent}
      </div>
    )
  }
}

export default SliderContainer;