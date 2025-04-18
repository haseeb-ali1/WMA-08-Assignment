
import React, { useState } from 'react';
import {
    FaFacebook, FaSearch, FaHome, FaUserFriends,
    FaPlayCircle, FaStore, FaGamepad, FaBell,
    FaFacebookMessenger, FaCaretDown, FaPlus,
    FaUserCircle, FaCog, FaQuestionCircle, FaMoon
} from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';

const FacebookNavbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showMenu, setShowMenu] = useState(false);
    const [activeTab, setActiveTab] = useState('home');

    const navItems = [
        { icon: <FaHome />, id: 'home' },
        { icon: <FaUserFriends />, id: 'friends' },
        { icon: <FaPlayCircle />, id: 'watch' },
        { icon: <FaStore />, id: 'marketplace' },
        { icon: <FaGamepad />, id: 'gaming' }
    ];

    return (
        <div className="facebook-navbar">
            {/* Left Section - Logo and Search */}
            <div className="navbar-left">
                <div className="logo">
                    <FaFacebook className="facebook-logo" />
                </div>
                <div className="search-container">
                    <div className="search-icon">
                        <FaSearch />
                    </div>
                    <input
                        type="text"
                        placeholder="Search Facebook"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Middle Section - Navigation Tabs */}
            <div className="navbar-middle">
                {navItems.map((item) => (
                    <div
                        key={item.id}
                        className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(item.id)}
                    >
                        {item.icon}
                        {activeTab === item.id && <div className="active-indicator"></div>}
                    </div>
                ))}
            </div>

            {/* Right Section - Menu and Icons
            <div className="navbar-right">
                <div className="menu-icon">
                    <div className="icon-container">
                        <FaPlus />
                    </div>
                </div>

                <div className="menu-icon">
                    <div className="icon-container">
                        <FaFacebookMessenger />
                    </div>
                </div>

                <div className="menu-icon">
                    <div className="icon-container">
                        <IoMdNotifications />
                        <span className="notification-badge">5</span>
                    </div>
                </div>

                <div
                    className="user-menu"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Profile"
                        className="profile-pic"
                    />
                    <span className="user-name">John Doe</span>

                    {showMenu && (
                        <div className="dropdown-menu">
                            <div className="menu-header">
                                <div className="menu-profile">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/32.jpg"
                                        alt="Profile"
                                        className="menu-profile-pic"
                                    />
                                    <div className="menu-profile-info">
                                        <h4>John Doe</h4>
                                        <p>See your profile</p>
                                    </div>
                                </div>
                            </div>

                            <div className="menu-divider"></div>

                            <div className="menu-item">
                                <FaUserCircle className="menu-item-icon" />
                                <span>Give feedback</span>
                            </div>

                            <div className="menu-item">
                                <FaCog className="menu-item-icon" />
                                <span>Settings & privacy</span>
                            </div>

                            <div className="menu-item">
                                <FaQuestionCircle className="menu-item-icon" />
                                <span>Help & support</span>
                            </div>

                            <div className="menu-item">
                                <FaMoon className="menu-item-icon" />
                                <span>Dark mode</span>
                                <div className="dark-mode-toggle">
                                    <div className="toggle-switch"></div>
                                </div>
                            </div>

                            <div className="menu-divider"></div>

                            <div className="menu-item">
                                <span>Log Out</span>
                            </div>
                        </div>
                    )}
                </div>
            </div> */}
        </div>
    );
};

export default FacebookNavbar; 