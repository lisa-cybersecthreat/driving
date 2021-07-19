import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import Application from './Application';
import Coach from './Coach';
import Retake from './Retake';
import Course from './Course';

function DrivingKing () {
    return(
        <div>
             
                <Router>
                    <Nav/>
                    <div className="web-wrapper">
                        <Switch>
                            <Route exact path="/" component={()=><Home/>} />
                            <Route exact path="/application" component={()=><Application />}/>  
                            <Route exact path="/coach" component={()=><Coach/>}/>        
                            <Route exact path="/retake" component={()=><Retake/>} />     
                            <Route exact path="/course" component={()=><Course/>} />       
                        </Switch> 
                    </div>
                </Router>           

        </div>
    )
}

export default DrivingKing;