import React from './node_modules/react';
import { Route, Switch, Redirect } from "react-router";
import './_sidebar.scss';
import Categories from './Categories'

class SideBar extends React.Component {

    render() {
    
    return (
       
    <div className="sidebarNav">
        
    <img src={logo} alt=""/>
        {/* <ul className="">  */}

        <Route exact path="/" component={HomePage}>Home</Route>

        <Route exact path="/list" component={List}>List</Route>
        <Route path="categories" component={Categories}>Categories</Route>
        <Route exact path="/submit-api" component={SubmitApi}>Submit an API</Route>
        <Route exact path="/about" component={About}>About</Route>

    </div>
    
            );

    }
    
}

export default SideBar;