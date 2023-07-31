import React, { useState } from 'react';
import './Sidebar.css'; // Import the CSS file for styling

const Sidebar = () => {
const [isExpanded, setExpanded] = useState(true);

const handleToggle = () => {
setExpanded(!isExpanded);
};

return (
<div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
<div className="sidebar-header">
<div className="arrow-icon" onClick={handleToggle}>
{isExpanded ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
</div>
</div>
<div className="sidebar-links">
{isExpanded && <a href="/Droplist">DropList</a>}
{isExpanded && <a href="/Search">Search</a>}
</div>
</div>
);
}

export default Sidebar;