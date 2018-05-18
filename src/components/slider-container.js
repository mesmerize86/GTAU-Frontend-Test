import React from 'react';

class SliderContainer extends React.Component {
  render () {
    const contents = this.props.contents;
    let bodyContent = contents.map((content, index) => {
      return (<div className="slider-body" key={index}>
        <div className="slider-thumbnail">{content.thumbnail}</div>
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