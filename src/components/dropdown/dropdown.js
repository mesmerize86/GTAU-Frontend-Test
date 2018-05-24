import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { connect } from 'react-redux';

import { contentApiRequest } from './dropdown-action';
import SliderContainer from '../slider/slider-container';

class DropDown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isCollapsed: false, /* a flag to watch drop down behaviour*/
      data: {} /* to hold the response from api */,
      error: ''
    }
  }

  /* toggle the drop down menu */
  handleToggle(e){
    e.preventDefault();
    this.setState({isCollapsed : !this.state.isCollapsed});
  }

  /* Load data once the page is rendered */
  componentDidMount(){
    this.props.contentApiRequest()
      .then(contents => {  
        !contents.error ? this.setState({ data: contents.contents}) : this.setState({ error: contents.error})
      })
  }
  render () {   
    return(
      <div className="dropdown">
        <div className="dropdown-bar dropdown-bar-rounded--top">
            {!this.state.error ? <p className="dropdown-title"><span className="icon-file"></span> {this.state.data.title} <a href="#" onClick={this.handleToggle.bind(this)}><span className={classname(this.state.isCollapsed ? "icon-caret-down" : "icon-caret-up")}></span></a></p> : <p className="dropdown-title">Couldn't find data. Pleaes contact administration</p>}
          </div> 
        { !this.state.isCollapsed && !this.state.error ? (<div className="dropdown-content"><SliderContainer contents={this.state.data.content}/></div>) : null }
      </div>
    )
  }
}

DropDown.propTypes = {
  contentApiRequest : PropTypes.func.isRequired,
}

export default connect(null, {contentApiRequest})(DropDown);
