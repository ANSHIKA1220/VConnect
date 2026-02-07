import React from 'react';
import Navigation from '../components/layout/Navigation';

const MainLayout = ({ children, onResetView, isDarkMode, onToggleDarkMode, hasActiveChat }) => {
    return (
        <div className={`app-container ${hasActiveChat ? 'has-active-chat' : ''}`}>
            <Navigation
                onResetView={onResetView}
                isDarkMode={isDarkMode}
                onToggleDarkMode={onToggleDarkMode}
            />
            {children}
        </div>
    );
};

export default MainLayout;
