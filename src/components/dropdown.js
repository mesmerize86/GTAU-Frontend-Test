import React from 'react';
import SliderContainer from './slider-container';

import classname from 'classnames';
import content from '../data/content';

class DropDown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isCollapsed: false,
      data: {}
    }
  }
  
  componentDidMount(){
    console.log('componentDidMount');
    this.setState({data: content})
  }
  handleToggle(e){
    e.preventDefault();
    this.setState({isCollapsed : !this.state.isCollapsed});
  }
  render () {
    console.log('render did mount');
    return(
      <div className="dropdown">
        <div className="dropdown-bar dropdown-bar-rounded--top">
          <p className="dropdown-title"><span className="icon-file"></span> {this.state.data.title} <a href="#" onClick={this.handleToggle.bind(this)}><span className={classname(this.state.isCollapsed ? "icon-caret-down" : "icon-caret-up")}></span></a></p>
        </div>
        { !this.state.isCollapsed ? (<div className="dropdown-content"><SliderContainer contents={this.state.data.content}/></div>) : null }
      </div>
    )
  }
}

export default DropDown;