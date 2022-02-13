import React, {Component} from 'react';
import Page from '../Components/Router';
import GlobalStyles from '../Components/GlobalStyles';

class App extends Component{
  render() {
    return (
       <>
        <Page/>
        <GlobalStyles />
       </>
    );
  }
}

export default App;
