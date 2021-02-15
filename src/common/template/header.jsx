import React from 'react';

import Navbar from './navbar';

export default props => (
    <header className="main-header">
        <a href="/#/" className="logo">
            <span className="logo-mini">
                M<b>y</b>M
            </span>
            <span className="logo-lg">
                <i className="fa fa-money"></i> <b>MyMoney</b> App
            </span>
        </a>
        <nav className="navbar navbar-static-top">
            <a href className="sidebar-toggle" data-toggle="offcanvas"/>
                {/* <span className="sr-only">Alternar navegação</span> */}
            <Navbar />  
        </nav>        
    </header>
)