import React from 'react';

import './Dashboard.css';
import Header from './components/header';
import Home from './components/home';

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <Header/>
            <Home/>
        </div>
    )
}

export default Dashboard;
