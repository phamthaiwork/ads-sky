import './App.css';
import HeaderComponent from './layouts/header';
import FlowAdsComponent from './components/FlowAds/flowAds';
import CheckContent from './components/CheckContent/checkContent';
import CheckDiscount from './components/CheckDiscount/checkDiscount';
import AdsAccount from './components/AdsAccount/adsAccount';
import UserInsights from './components/UserInsights/userInsights';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Router> 
      <div className="App container-fluid ">
        <div className="row" style={{backgroundColor:'#fff'}}>
            <HeaderComponent />
        </div>
        
        {/* <div className="container"> */}
            <div className="row content">
                <Switch>
                    <Route exact path="/">
                        <FlowAdsComponent />
                    </Route>
                    <Route exact path="/check-content">
                        <CheckContent />
                    </Route>
                    <Route exact path="/check-discount">
                        <CheckDiscount />
                    </Route>
                    <Route exact path="/ads-account">
                        <AdsAccount />
                    </Route>
                    <Route exact path="/user-insights">
                        <UserInsights />
                    </Route>
                    <Route exact path="*">
                        <div>Page Not Found</div>
                    </Route>  
                </Switch>
            </div>
        </div>
        
      {/* </div> */}
    </Router>

  );
} 

export default App;
