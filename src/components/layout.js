import React from 'react';
import './../css/layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            {children}
        </div>
    );
}

export default Layout;