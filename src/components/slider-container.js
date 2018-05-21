import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
/*
 - dangerouslySetInnerHTML is not appropriate to use. Therefore I use other react wrapper.
 - For more details please click on the link. https://github.com/remarkablemark/html-react-parser
*/
import Parser from 'html-react-parser';

class SliderContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentSlide: 0, //variable to hold the current slide
      height: 0, //variable to hold the height of container
      isExpand: false, //a flag to watch the dropdown 
      contents: this.props.contents // get the data from parent component
    }
  }
  
  /* */
  handlePrevButton(e){
    e.preventDefault();
    const { contents } = this.state;
    this.setState({ isExpand : false});
    if(this.state.currentSlide === 0){
      this.setState({ currentSlide : contents.length - 1});
    }else{
      this.setState({ currentSlide : this.state.currentSlide - 1});
    }
  }
  /* */
  handleNextButton(e){
    e.preventDefault();
    const { contents } = this.state;
    this.setState({ isExpand : false});
    if(this.state.currentSlide < contents.length - 1){
      this.setState({ currentSlide : this.state.currentSlide + 1});
    }else{
      this.setState({ currentSlide : 0});
    }
  }
  /* */
  toggleTextArea(e){
    e.preventDefault();
    this.setState({ isExpand: !this.state.isExpand })
  }
  /* a change detection from parent component. */
  componentWillReceiveProps(nextProps){
    if(this.props.contents !== nextProps.contents)
      this.setState({ contents: nextProps.contents});
  }

  render () {
    const { contents } = this.state;
    const imagePath = "/assets/images/"; //Assuming this as dynamic source. Only for time being
    let sliderContent;
    
    if(this.props.contents){
      sliderContent = contents.map((content, index) => {
        return (<div className={classnames("slider-container", {"isActive" : this.state.currentSlide === index })} key={index} >
        <div className="slider-thumbnail"><img onError={(e)=>{e.target.src=`${imagePath}no-image-available.jpg`}} src={!!content.thumbnail ? `${imagePath}${content.thumbnail}` : `${imagePath}no-image-available.jpg`} alt={content.title} className="img-responsive"/></div>
        <div className="slider-content">
          <p className="slider-title">{content.title}</p>
          <p className={classnames("slider-description", {'isExpand' : this.state.isExpand})} >{Parser(content.description)}</p>
          <button className="slider-toggleButton" onClick={this.toggleTextArea.bind(this)}>{!this.state.isExpand ? <p>More <span className="icon-add-outline"></span></p> : <p>Less <span className="icon-minus-outline"> </span></p>}</button>
        </div>
      </div>)
    });
  }

    return(
      <div className="slider">
        {sliderContent}
        <div className="slider-control">
          <ul className="slider-control-wrapper">
            <li className="slider-control--left">
              <a href="#" className="slider-control-link" onClick={this.handlePrevButton.bind(this)}><span className="icon icon-caret-left"></span> <span className="control-text control-text--prev">Prev</span></a>
            </li>
            <li className="slider-control--right">
              <a href="#" className="slider-control-link" onClick={this.handleNextButton.bind(this)}><span className="control-text control-text--next">Next</span> <span className="icon icon-caret-right"></span></a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

/* Validation for proptypes data */
SliderContainer.propTypes = {
  contents: PropTypes.array
}

export default SliderContainer;
