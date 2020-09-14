import React from 'react';

import './Dashboard.css';
import Header from './components/header';
import Home from './components/home';
import ChatRoom from './components/chat-room';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <Router>
                <Header/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/chats" component={ChatRoom}/>
                </Switch>
            </Router>

        </div>
    )
}

export default Dashboard;
