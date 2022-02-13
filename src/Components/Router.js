import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import HomeContainer from "../Routes/Home/HomeContainer";
import TV from "../Routes/TV";
import Header from './Header';
import Search from "../Routes/Search";


function Page() {
  return(
    <Router>
      <>
      <Header/>
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search}/>
        <Redirect from="*" to="/"/>
      </Switch>
      </>
    </Router>
  )
}

export default Page;