import React from 'react';
import {
    HashRouter as Router,
    // BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Application from './Application';
import Coach from './Coach';
import Retake from './Retake';
import Course from './Course';
import FooterButton from './FooterButtom';
import MustKnow from './MustKnow';

function DrivingWebsite (props) {
    return(
        // <div>
            <Router basename="/">
                <Nav/>
                <div className="web-wrapper">
                    <Switch>
                        <Route exact path="/" component={()=><Home/>} />
                        <Route exact path="/application" component={()=><Application />}/>  
                        <Route exact path="/coach" component={()=><Coach/>}/>        
                        <Route exact path="/mustknow" component={()=><MustKnow/>}/>        
                        <Route exact path="/retake" component={()=><Retake/>} />     
                        <Route exact path="/course" component={()=><Course/>} />       
                    </Switch> 
                </div>
                <FooterButton/>   
            </Router>    
                
        // </div>
    )
}

export default DrivingWebsite;