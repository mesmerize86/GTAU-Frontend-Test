import React from 'react';
import axios from 'axios';
import classname from 'classnames';

import SliderContainer from './slider-container';

class DropDown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isCollapsed: false, /* a flag to watch drop down behaviour*/
      data: {} /* to hold the response from api */
    }
  }

  /* toggle the drop down menu */
  handleToggle(e){
    e.preventDefault();
    this.setState({isCollapsed : !this.state.isCollapsed});
  }

  /* Load data once the page is rendered */
  componentDidMount(){
    axios.get('/src/data/content.json').then(response => {
      this.setState({ data : response.data }) // get the response from api and save it to local state
    }).catch(err => {
      console.log(err);
    })
  }
  render () {   
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
