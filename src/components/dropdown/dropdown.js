import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { connect } from 'react-redux';

import { contentApiRequest } from './dropdown-action';
import SliderContainer from '../slider/slider-container';
import DropdownContainer from './dropdown-container';
import { errorContent } from '../shared/error-messages';

class DropDown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isCollapsed: false, /* a flag to watch drop down behaviour*/
      contents: this.props.contents /* to hold the response from api */,
    }
  }

  /* toggle the drop down menu */
  handleToggle(e){
    e.preventDefault();
    this.setState({isCollapsed : !this.state.isCollapsed});
  }

  /* Load data once the page is rendered */
  componentDidMount(){
    this.props.contentApiRequest();    
  }
  
  componentWillReceiveProps(nextProps){
    if(this.props.contents !== nextProps)
      this.setState({ contents: nextProps.contents})
  }
  
  render () {   
    const sliderContent = ( !this.state.isCollapsed && this.props.contents.status !==404 ? 
                              (<div className="dropdown-content"><SliderContainer contents={this.state.contents.content}/></div>) 
                              :  null )
    return(
      <div className="dropdown">
        <div className="dropdown-bar dropdown-bar-rounded--top">
            {this.props.contents.status !== 404 ? 
              <DropdownContainer 
                title={this.state.contents.title} 
                handleToggle={this.handleToggle.bind(this)} 
                isCollapsed={this.state.isCollapsed}/>: <p className="dropdown-title">{errorContent}</p>}
          </div> 
        {sliderContent}
      </div>
    )
  }
}

DropDown.propTypes = {
  contentApiRequest : PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    contents: state.contents
  }
}
export default connect(mapStateToProps, {contentApiRequest})(DropDown);
