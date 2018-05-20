import React from 'react';
import SliderContainer from '../components/slider-container';
import DropDown from '../components/dropdown';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
      return(
        <div className="container">
          <div className="panel panel-rounded--top panel-shadow">
            <DropDown />
          </div>
      </div>
      );
  }
}

export default App;
