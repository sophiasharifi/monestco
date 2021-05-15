import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import '../../styles/ApparelDropdown.css';

function ApparelDropdown({enterAppDropdown, exitAppDropdown}) {
  {/* Functions handling click */}
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
      <ul
        onClick={handleClick}
        className={click ? 'Dropdown-Menu clicked' : 'Dropdown-Menu'} 
        onMouseEnter={enterAppDropdown}
        onMouseLeave={exitAppDropdown}
        >
        <div className = "Dropdown-Menu-Apparel-Container">
        {/* Maps over company items -- currently reference the same JS file due to placeholders */}
        <div className = "Category-Titles">
            <h2>Unisex</h2>
            <h2>Women</h2>
            <h2>Sportswear</h2>
            <h2>Shoes & Accessories</h2>
            <h2 style = {{color:'#9A9B9C'}}>Luxury</h2>
            <h2 style={{cursor:'pointer'}} onClick={() => window.location.href="/brand-directory"}>All Brands A-Z</h2>
        </div>
        
        <div className = 'Companies'>
        { MenuItems.map((item, index) => {
            return (
                <li key = {index} >
                    {/* <Link onClick = {() => setClick(false)} ></Link> */}
                    {/* Creates a Link object for every item mapped from MenuItems.js */}
                    <Link 
                        className = {item.cName}
                        to = {item.path}
                        onClick = {exitAppDropdown} >
                            {item.title}
                     </Link>
                </li>
             );
         })}
         </div>
         <div className='all-brand-link'>
            All Brands A-Z
         </div>
         </div>
      </ul>
  );
}

export default ApparelDropdown;