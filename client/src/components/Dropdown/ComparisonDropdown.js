import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import  ApparelImg from '../../assets/compare_apparel.svg'
import  TechImg from '../../assets/compare_tech.svg'
import  FoodImg from '../../assets/compare_food.svg'
import  BeautyImg from '../../assets/compare_beauty.svg'
import '../../styles/ComparisonDropdown.css';

function ComparisonDropdown({enterCompareDropdown, exitCompareDropdown}) {
  {/* Functions handling click */}
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
      <ul
        onClick={handleClick}
        className={`compare-dropDown-container ${click ? 'Dropdown-Menu clicked' : 'Dropdown-Menu'}`} 
        onMouseEnter={enterCompareDropdown} 
        onMouseLeave={exitCompareDropdown}
        >  

        <div className = 'Comparison-Options'>
          <div className = 'Selection-Box Apparel'>
          <Link to = '/comparison'>
              <div className = 'text'>
              <h1>Apparel</h1>
              <h2>Clothes, shoes,<br></br> and accessories</h2>
              </div>
              <img style={{float: 'right', marginRight:'30px', marginTop: '-70px'}} src = {ApparelImg}></img>
              </Link>
          </div>
          
          <div className = 'Selection-Box Tech'>
            <div className = 'text'>
              <h1>Tech</h1>
              <h2>Coming soon</h2>
            </div>
            <img style={{float: 'right', marginRight:'30px', marginTop: '-60px'}} src = {TechImg}></img>
          </div>

          <div className = 'Selection-Box Fast-Food'>
            <div className = 'text'>
              <h1>Fast Food</h1>
              <h2>Coming soon</h2>
              </div>
              <img style={{float: 'right', marginRight:'30px', marginTop: '-60px'}} src = {FoodImg}></img>
          </div>

          <div className = 'Selection-Box Beauty'>
            <div className = 'text'>
              <h1>Beauty</h1>
              <h2>Coming soon</h2>
              </div>
              <img style={{float: 'right', marginRight:'30px', marginTop: '-60px'}} src = {BeautyImg}></img>
            </div>
        </div>

      </ul>
  );
}

export default ComparisonDropdown;