import React from 'react';
import DropDown from '../components/dropdown/dropdown';

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
