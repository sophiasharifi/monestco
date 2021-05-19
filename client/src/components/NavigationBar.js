import React, { useState, useLayoutEffect, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import LogoTransparent from '../assets/monestlogo.png'
import ApparelDropdown from './Dropdown/ApparelDropdown.js'
import TechDropdown from './Dropdown/TechDropdown.js'
import FastFoodDropdown from './Dropdown/FastFoodDropdown.js'
import ComparisonDropdown from './Dropdown/ComparisonDropdown.js';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import '../styles/NavigationBar.css';
import BrandDirectory from '../pages/BrandDirectory';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  searchInput: {
    position:'fixed',
    left:'0',
    top:'80px',
    width:'100%',
    backgroundColor:'#fff',
    boxShadow: '0px 2px 9px 3px rgb(152 165 177 / 12%)',    
    padding:'16px 24px',    
    zIndex: "20"
  }
}));


function NavigationBar() {
  {/* Declare variables that will change state when clicked */ }
  {/* Set to false by default, when a component is triggered, will set to respective state */}
  const [click, setClick] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [tabView, setTabView] = useState(false);
  const state = { clicked: false }
  const classes = useStyles();

  {/* Declare additional variables to change state when dropdown menu is triggered*/}
  {/* Need to define for each navigation item (apparel, tech, etc..) */}
  const [appDropdownLink, setAppDropdownLink] = useState(false);
  const [appDropdown, setAppDropdown] = useState(false);

  const [foodDropdownLink, setFoodDropdownLink] = useState(false);
  const [foodDropdown, setFoodDropdown] = useState(false);

  const [techDropdownLink, setTechDropdownLink] = useState(false);
  const [techDropdown, setTechDropdown] = useState(false);

  const [compareDropdownLink, setCompareDropdownLink] = useState(false);
  const [compareDropdown, setCompareDropdown] = useState(false);

  const [keepNav, setKeepNav] = useState(true);
  const [specificBrands, setSpecificBrands] = useState(false);

  const [showBrands, setShowBrands] = useState([]);

  const [companiesList, setCompaniesList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    axios.get("/allcompanies").then((resp) => {
      const allcompanies = [];
      for (var i = 0; i < resp.data.rows.length; i++) {
        allcompanies.push(resp.data.rows[i].Name);
      }
      setCompaniesList(allcompanies);
    });
  },[]);

  const handleChange = (e) => {
    if(e.target.value !== "") {
      setInputValue(e.target.value);
      const sortList = companiesList.filter(company => company.slice(0,e.target.value.length).toLowerCase() === e.target.value.toLowerCase())    
      setSearchList(sortList)
      setShowList(true);
    } else {
      setInputValue("");
      setSearchList([]);
      setShowList(false);
    }
  };

  {/* Closes menu when navigated away */}
  const closeMenu = () => {
    setClick(false);
    setKeepNav(true);
    setSpecificBrands(false);
  }
  const handleClick = () => {
    setClick(!click);
    setKeepNav(true);
    setSpecificBrands(false);
  }

  const minWidth = 850;
  const timeLimit = 400;

  {/* Manage apparel dropdown menu*/}
  const enterAppDropdown = () => {
    if (window.innerWidth > minWidth) {    
      setAppDropdown(true);    
    }
  };

  const exitAppDropdown = () => {
    if (window.innerWidth > minWidth) { 
      setTimeout(() => {      
        setAppDropdown(false);      
      }, timeLimit)
    }
  };

  const enterAppDropdownLink = () => { 
    if (window.innerWidth > minWidth) { 
      setAppDropdownLink(true);
    }
  };

  const exitAppDropdownLink = () => {
    if (window.innerWidth > minWidth) {
    setTimeout(() => {      
        setAppDropdownLink(false);
    }, timeLimit)
    }
  };

  {/* Manage fast food dropdown menu */}
  const enterFoodDropdown = () => {
    if (window.innerWidth > minWidth) {
      setFoodDropdown(true);
    }
  };

  const exitFoodDropdown = () => {
    if (window.innerWidth > minWidth) {
      setTimeout(() => {      
        setFoodDropdown(false);   
      }, timeLimit)
    }
  };

  const enterFoodDropdownLink = () => {
    if (window.innerWidth > minWidth) {
      setFoodDropdownLink(true);
    }
  };

  const exitFoodDropdownLink = () => {
    if (window.innerWidth > minWidth) {
      setTimeout(() => {      
        setFoodDropdownLink(false);   
      }, timeLimit)      
    }
  };

  {/* Manage tech dropdown menu */}
  const enterTechDropdownLink = () => {
    if (window.innerWidth > minWidth) {      
      setTechDropdownLink(true);
    }
  };

  const exitTechDropdownLink = () => {
    if (window.innerWidth > minWidth) {
      setTimeout(() => {      
        setTechDropdownLink(false);   
      }, timeLimit)      
    }
  };

  const enterTechDropdown = () => {
    if (window.innerWidth > minWidth) {      
      setTechDropdown(true);
    }
  };

  const exitTechDropdown = () => {
    if (window.innerWidth > minWidth) {
      setTimeout(() => {      
        setTechDropdown(false);   
      }, timeLimit)      
    }
  };

    {/* Manage compare dropdown menu */}
  const enterCompareDropdownLink = () => {
    if (window.innerWidth > minWidth) {      
      setCompareDropdownLink(true);
    }
  };

  const exitCompareDropdownLink = () => {
    if (window.innerWidth > minWidth) {
      setTimeout(() => {      
        setCompareDropdownLink(false);   
      }, timeLimit)       
    }
  };

  const enterCompareDropdown = () => {
    if (window.innerWidth > minWidth) {      
      setCompareDropdown(true);
    }
  };

  const findBrands = (brand) => {
    let brands = [];
    if (brand == "Unisex") {
      brands.push("Uniqlo");
      brands.push("Zara");
      brands.push("H&M");
      brands.push("Levis");
    } else if (brand == "Women") {
      brands.push("Aritzia");
      brands.push("Boohoo");
      brands.push("Victoria's Secret");
      brands.push("Nasty Gal");
    } else if (brand == "Sportswear") {
      brands.push("Nike");
      brands.push("Adidas");
      brands.push("Under Armour");
      brands.push("Lululemon");
    } else if (brand == "Shoes & Accessories") {
      brands.push("Vans");
      brands.push("Converse");
      brands.push("Aldo");
      brands.push("Steve Madden");
    } else if (brand == "Luxury") {
      brands.push("Gucci");
      brands.push("Hermes");
      brands.push("Louis Vutton");
      brands.push("Hugo Boss");
    }
    setShowBrands(brands);
    setSpecificBrands(true);
    // axios.post('/brandsbycategory',
    //         {},
    //         {
    //             params: [brand]
    //         }
    //     ).then(resp => {
    //         let names = []
    //         resp.data.rows.map(name => {
    //           names.push(name.Name);
    //         })
    //         setShowBrands(names);
    //     })
  }

  const NavBrands = () => {
    return showBrands.map( brand => {
      return (<li className='Menu-Item only-mobile' onMouseEnter={enterTechDropdownLink} onMouseLeave={exitTechDropdownLink} >
            <Link
              to={'/companies/'+brand}
              className='Navigation-Link nav-hover'
              onClick={closeMenu} >
                 {brand}
            </Link>
            <AiOutlineRight className="nav-arrow arrow-apparel"/>
            {(techDropdownLink || techDropdown) && <TechDropdown enterTechDropdown={enterTechDropdown} exitTechDropdown={exitTechDropdown}  />}
      </li>
    )})
  }

  const exitCompareDropdown = () => {
    if (window.innerWidth > minWidth) {
      setTimeout(() => {      
        setCompareDropdown(false);   
      }, timeLimit)       
    }
  };

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth > minWidth) {
        setClick(false)
        setTabView(false)
      } else {
        setTabView(true)
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  
  return (
    <div className = 'Navigation-Bar-Container'>
      <nav className = 'Navigation-Bar' >
          {/* Monest Logo */}

        <Link 
            to='/' 
            className='Logo' 
            onClick={closeMenu}>
                <img src = {LogoTransparent} alt = "logo" class="logo"/>
        </Link>

        {/* Hamburger menu appears when screen size is smaller/mobile */}

        <div className = "Mobile-Hamburger-Menu" onClick = {handleClick}>
          {/* Retrieved from Font Awesome CDN */}
          <i className = {click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        {/* Begin Navigation Menu */}
        <ul className = {click ? 'Nav-Menu active' : 'Navigation-Menu'}>
            {/* onMouseEnter denotes hover-over */}
            <>
            {keepNav && !specificBrands && <>
            <li className='Menu-Item Menu-Title only-mobile' onMouseEnter={enterAppDropdownLink} onMouseLeave={exitAppDropdownLink}>
            <Link 
                // to='/comparison'
                className='Navigation-Link Nav-Title' 
                // onClick={closeMenu}
                >
                    Compare
            </Link>
            {(appDropdownLink || appDropdown) && <ApparelDropdown enterAppDropdown={enterAppDropdown} exitAppDropdown={exitAppDropdown}/>}
          </li>
          <li className='Menu-Item only-mobile' onMouseEnter={enterAppDropdownLink} onMouseLeave={exitAppDropdownLink}>
            <Link 
                to='/comparison'
                className='Navigation-Link nav-hover' 
                onClick={closeMenu}
                >
                    Apparel 
            </Link>
            <AiOutlineRight className="nav-arrow arrow-apparel" />
            {(appDropdownLink || appDropdown) && <ApparelDropdown enterAppDropdown={enterAppDropdown} exitAppDropdown={exitAppDropdown}/>}
          </li>

          {/* onMouseEnter denotes hover-over */}
          <li className='Menu-Item only-mobile' onMouseEnter={enterTechDropdownLink} onMouseLeave={exitTechDropdownLink} >
            <Link
              // to='/'
              className='Navigation-Link disabled'
              // onClick={closeMenu} 
            >
                 Tech
            </Link>
            <AiOutlineRight className="nav-arrow"/>
            {(techDropdownLink || techDropdown) && <TechDropdown enterTechDropdown={enterTechDropdown} exitTechDropdown={exitTechDropdown}  />}
          </li>

           {/* onMouseEnter denotes hover-over */}
          <li className='Menu-Item only-mobile' onMouseEnter={enterFoodDropdownLink} onMouseLeave={exitFoodDropdownLink} >
            <Link
              // to='/'
              className='Navigation-Link disabled'
              // onClick={closeMenu} 
            >
                 Fast Food 
            </Link>
            <AiOutlineRight className="nav-arrow"/>
            {(foodDropdown || foodDropdownLink) && <FastFoodDropdown enterFoodDropdown={enterFoodDropdown} exitFoodDropdown={exitFoodDropdown}  />}
          </li>

          {/* onMouseEnter denotes hover-over */}
          <li className='Menu-Item only-mobile' onMouseEnter={enterFoodDropdownLink} onMouseLeave={exitFoodDropdownLink} >
            <Link
              // to='/'
              className='Navigation-Link disabled'
              // onClick={closeMenu} 
            >
                 Beauty 
            </Link>
            <AiOutlineRight className="nav-arrow"/>
            {(foodDropdown || foodDropdownLink) && <FastFoodDropdown enterFoodDropdown={enterFoodDropdown} exitFoodDropdown={exitFoodDropdown}  />}
          </li>
          <li className='Menu-Item Menu-Title only-mobile' onMouseEnter={enterAppDropdownLink} onMouseLeave={exitAppDropdownLink}>
            <Link 
                // to='/brand-directory'
                className='Navigation-Link Nav-Title' 
                // onClick={closeMenu}
              >
                    Brands
            </Link>
            {(appDropdownLink || appDropdown) && <ApparelDropdown enterAppDropdown={enterAppDropdown} exitAppDropdown={exitAppDropdown}/>}
          </li>
          <li className='Menu-Item' onMouseEnter={enterAppDropdownLink} onMouseLeave={exitAppDropdownLink}>
            <Link 
                to='/brand-directory'
                className='Navigation-Link nav-hover' 
                onClick={() => tabView && setKeepNav(false)}
                >
                    Apparel
            </Link>
            <AiOutlineRight className="nav-arrow arrow-apparel"/>
            {(appDropdownLink || appDropdown) && <ApparelDropdown enterAppDropdown={enterAppDropdown} exitAppDropdown={exitAppDropdown}/>}
          </li>

          {/* onMouseEnter denotes hover-over */}
          <li className='Menu-Item' onMouseEnter={enterTechDropdownLink} onMouseLeave={exitTechDropdownLink} >
            <Link
              to='/'
              className='Navigation-Link disabled'
              // onClick={closeMenu} 
            >
                 Tech
            </Link>
            <AiOutlineRight className="nav-arrow"/>
            {(techDropdownLink || techDropdown) && <TechDropdown enterTechDropdown={enterTechDropdown} exitTechDropdown={exitTechDropdown}  />}
          </li>

           {/* onMouseEnter denotes hover-over */}
          <li className='Menu-Item' onMouseEnter={enterFoodDropdownLink} onMouseLeave={exitFoodDropdownLink} >
            <Link
              to='/'
              className='Navigation-Link disabled'
              // onClick={closeMenu} 
            >
                 Fast Food 
            </Link>
            <AiOutlineRight className="nav-arrow"/>
            {(foodDropdown || foodDropdownLink) && <FastFoodDropdown enterFoodDropdown={enterFoodDropdown} exitFoodDropdown={exitFoodDropdown}  />}
          </li>

          {/* onMouseEnter denotes hover-over */}
          <li className='Menu-Item' onMouseEnter={enterFoodDropdownLink} onMouseLeave={exitFoodDropdownLink} >
            <Link
              to='/'
              className='Navigation-Link disabled'
              // onClick={closeMenu} 
            >
                 Beauty 
            </Link>
            <AiOutlineRight className="nav-arrow"/>
            {(foodDropdown || foodDropdownLink) && <FastFoodDropdown enterFoodDropdown={enterFoodDropdown} exitFoodDropdown={exitFoodDropdown}  />}
          </li>

          {/* onMouseEnter denotes hover-over */}
          <li className='Menu-Item Menu-Title' >
            <Link
              to='/methodology'
              className='Navigation-Link Nav-Title nav-hover'
              onClick={closeMenu} 
            >
                 Methodology
            </Link>
          </li>

          {/* Compare button had unique css styling but still has hover dropdown, denoted by having two classNames  */}
          <li className='Menu-Item only-desktop' onMouseEnter={enterCompareDropdownLink} onMouseLeave={exitCompareDropdownLink}>
            <Link
              to='/comparison'
              className='Compare-Button'
              onClick={closeMenu} 
            >
                Compare
            </Link>
            {(compareDropdownLink || compareDropdown) && <ComparisonDropdown enterCompareDropdown={enterCompareDropdown} exitCompareDropdown={exitCompareDropdown} />}
          </li>
          <div style={{position:"relative"}}>
            <li className='Menu-Item Menu-Item-search only-desktop' >
              <TextField 
                id="standard-basic" 
                placeholder="Search"
                className="search-input"
                value={inputValue}
                onChange={handleChange}
                // onFocus={() => setShowList(true)}
                onBlur={() => setTimeout(() => setShowList(false), 200)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon style={{fill:'rgba(50,50,50,0.5)'}} />
                    </InputAdornment>
                  ),
                }}
                />               
            </li>
              {showList && !tabView && (
                <div className="nav-search-company-container">
                  {searchList.map((item, index) => {
                    return (
                      <div key={index}>
                        <Link to={'/companies/'+ item} onClick={() => setShowList(false)} >
                          {item}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              )}
          </div>

          </>}
          </>
          <>
          {!keepNav && !specificBrands && <><li className='Menu-Item Menu-Title only-mobile' onMouseEnter={enterAppDropdownLink} onMouseLeave={exitAppDropdownLink}>
            <Link 
                to='/comparison'
                className='Navigation-Link Nav-Title' 
                onClick={closeMenu}
                >
                    Brands
            </Link>
            {(appDropdownLink || appDropdown) && <ApparelDropdown enterAppDropdown={enterAppDropdown} exitAppDropdown={exitAppDropdown}/>}
          </li>
          <li className='Menu-Item' onMouseEnter={enterFoodDropdownLink} onMouseLeave={exitFoodDropdownLink} >
            <Link
              // to='/'
              className='Navigation-Link nav-hover nav-back only-mobile'
              onClick={() => setKeepNav(true)} >
                <AiOutlineLeft className="nav-arrow-back nav-back"/>
                 Back
            </Link>
            {(foodDropdown || foodDropdownLink) && <FastFoodDropdown enterFoodDropdown={enterFoodDropdown} exitFoodDropdown={exitFoodDropdown}  />}
          </li>
          <li className='Menu-Item' onMouseEnter={enterAppDropdownLink} onMouseLeave={exitAppDropdownLink}>
            <Link 
                // to='/brand-directory'
                className='Navigation-Link nav-hover only-mobile' 
                onClick={() => findBrands("Unisex")}
                >
                  Unisex
            </Link>
            <AiOutlineRight className="nav-arrow arrow-apparel"/>
            {(appDropdownLink || appDropdown) && <ApparelDropdown enterAppDropdown={enterAppDropdown} exitAppDropdown={exitAppDropdown}/>}
          </li>
          <li className='Menu-Item' onMouseEnter={enterAppDropdownLink} onMouseLeave={exitAppDropdownLink}>
            <Link 
                to='/brand-directory'
                className='Navigation-Link nav-hover only-mobile' 
                onClick={() => findBrands("Women")}
                >
                  Women
            </Link>
            <AiOutlineRight className="nav-arrow arrow-apparel"/>
            {(appDropdownLink || appDropdown) && <ApparelDropdown enterAppDropdown={enterAppDropdown} exitAppDropdown={exitAppDropdown}/>}
          </li>
          <li className='Menu-Item' onMouseEnter={enterAppDropdownLink} onMouseLeave={exitAppDropdownLink}>
            <Link 
                to='/brand-directory'
                className='Navigation-Link nav-hover only-mobile' 
                onClick={() => findBrands("Sportswear")}
                >
                  Sportswear
            </Link>
            <AiOutlineRight className="nav-arrow arrow-apparel"/>
            {(appDropdownLink || appDropdown) && <ApparelDropdown enterAppDropdown={enterAppDropdown} exitAppDropdown={exitAppDropdown}/>}
          </li>
          <li className='Menu-Item' onMouseEnter={enterAppDropdownLink} onMouseLeave={exitAppDropdownLink}>
            <Link 
                to='/brand-directory'
                className='Navigation-Link nav-hover only-mobile' 
                onClick={() => findBrands("Shoes & Accessories")}
                >
                  Shoes & Accessories
            </Link>
            <AiOutlineRight className="nav-arrow arrow-apparel"/>
            {(appDropdownLink || appDropdown) && <ApparelDropdown enterAppDropdown={enterAppDropdown} exitAppDropdown={exitAppDropdown}/>}
          </li>
          <li className='Menu-Item' onMouseEnter={enterFoodDropdownLink} onMouseLeave={exitFoodDropdownLink} >
            <Link
              to='/'
              className='Navigation-Link disabled only-mobile'
              // onClick={closeMenu} 
            >
                 Luxury 
            </Link>
            <AiOutlineRight className="nav-arrow"/>
            {(foodDropdown || foodDropdownLink) && <FastFoodDropdown enterFoodDropdown={enterFoodDropdown} exitFoodDropdown={exitFoodDropdown}  />}
          </li>
          <li className='Menu-Item' onMouseEnter={enterAppDropdownLink} onMouseLeave={exitAppDropdownLink}>
            <Link 
                to='/brand-directory'
                className='Navigation-Link nav-hover only-mobile' 
                onClick={closeMenu}
                >
                  Brands A-Z
            </Link>
            <AiOutlineRight className="nav-arrow arrow-apparel"/>
            {(appDropdownLink || appDropdown) && <ApparelDropdown enterAppDropdown={enterAppDropdown} exitAppDropdown={exitAppDropdown}/>}
          </li></>}
          </>
          <>{!keepNav && specificBrands && <>
          <li className='Menu-Item' onMouseEnter={enterFoodDropdownLink} onMouseLeave={exitFoodDropdownLink} >
            <Link
              // to='/'
              className='Navigation-Link nav-hover nav-back only-mobile'
              onClick={() => setSpecificBrands(false)} >
                <AiOutlineLeft className="nav-arrow-back nav-back"/>
                 Back
            </Link>
            {(foodDropdown || foodDropdownLink) && <FastFoodDropdown enterFoodDropdown={enterFoodDropdown} exitFoodDropdown={exitFoodDropdown}  />}
          </li>
          <NavBrands />
        </>
        }</>
        </ul>
        <div className='mobile-search-icon'>
          <SearchIcon onClick={() => setShowSearch(!showSearch)} style={{fill:'rgb(50,50,50)', fontSize:'25px'}} />
          {showSearch &&
          <>
           <TextField 
              id="search-dropdown" 
              placeholder="Search for the brand"
              className={`${classes.searchInput} seach-input-2` }
              value={inputValue}
              onChange={handleChange}
              onFocus={() => inputValue && setShowList(true)}
              onBlur={() => setTimeout(() => setShowList(false), 200)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{fill:'rgba(50,50,50,0.5)'}} />
                  </InputAdornment>
                ),
              }}
               />
               {showList && tabView && (
                <div className="nav-search-company-container-mobile">
                  {searchList.map((item, index) => {
                    return (
                      <div key={index}>
                        <Link to={'/companies/'+ item} onClick={() => setShowSearch(false)} >
                          {item}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
               }
        </div>
      </nav>
      </div>
  );
}

export default NavigationBar;