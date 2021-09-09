import React from 'react';
import {
    HashRouter as Router,
    // BrowserRouter as Router,
    Route,
    Switch,
    withRouter
} from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Application from './Application';
import Coach from './Coach';
import Retake from './Retake';
import Course from './Course';
import FooterButton from './FooterButtom';
import MustKnow from './MustKnow';
import MyAccount from './MyAccount';

const WebsiteRouteNav = ({exact, path, component: Component, ...rest}) => {
    return <Route 
                exact   
                path={path} 
                {...rest} 
                render={(routeProps)=><>
                    <Nav {...routeProps} />
                </>} />
}

function DrivingWebsite (props) {
    return(
        <Router basename="/">
            <Nav />
            <div className="web-wrapper">
                <Switch>
                    <Route exact path="/" component={(props)=><Home{...props}/>} />
                    <Route exact path="/application" component={()=><Application />}/>  
                    <Route exact path="/coach" component={()=><Coach/>}/>        
                    <Route exact path="/mustknow" component={()=><MustKnow/>}/>        
                    <Route exact path="/retake" component={()=><Retake/>} />     
                    <Route exact path="/course" component={()=><Course/>} />       
                    <Route exact path="/myaccount" component={(props)=><MyAccount{...props}/>} />       
                </Switch> 
            </div>
            <FooterButton/>   
        </Router>    
    )
}

export default DrivingWebsite;