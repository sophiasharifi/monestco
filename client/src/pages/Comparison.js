import React, { useEffect, useState, useLayoutEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "../styles/Comparison.css";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
//import CompareTool from '../components/CompareTool';
import CompareTool from "../components/CompareTool-new";
import companies from '../data/companies.json';
import CompareSearch from "../components/CompareSearch";
import { Link } from 'react-router-dom';

const Comparison = () => {
  const [companyList, setCompanyList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [showList, setShowList] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedCompaniesList, setSelectedCompaniesList] = useState(["","",""]);
  const [inputBrand, setInputBrands] = useState([false, false, false]);
  const [mobileView, setMobileView ] = useState(window.innerWidth < 600)
  const [showSportMenu, setSportMenu] = useState(false)
  const [showUnisexMenu, setUnisexMenu] = useState(false)
  const [showWomenMenu, setWomenMenu] = useState(false)
  const [showShoeMenu, setShoeMenu] = useState(false)

  const handleChange = (e) => {
    setInputValue(e.target.value);
    const sortList = companyList.filter(company => company.slice(0,e.target.value.length).toLowerCase() === e.target.value.toLowerCase())    
    setSearchList(sortList)
    setShowList(true);
  };

  const addBrand = (item) => {
      setSelectedCompaniesList((selectedCompaniesList) => {
        if(!selectedCompaniesList[0]) {
            selectedCompaniesList[0] = item;
        } else if(!selectedCompaniesList[1]) {
            selectedCompaniesList[1] = item;
        } else if(!selectedCompaniesList[2]) {
            selectedCompaniesList[2] = item;
        }
            return [...selectedCompaniesList];
      })
      setShowList(false);
      setInputValue('');
  };

  const fetchBrand = (companyList) => {
    setCompanyList(companyList);
  };

  const removeBrand = (index) => {
    setSelectedCompaniesList((selectedCompaniesList) => {
      selectedCompaniesList[index] = "";
      return [...selectedCompaniesList];
    });
  };

  useLayoutEffect(() => {
    function updateSize() {
      if(window.innerWidth > 600) {
        setMobileView(false)
      } else {
        setMobileView(true)
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    setSearchList(companyList);    
  },[companyList])

  useEffect(() => {
    if(mobileView && selectedCompaniesList.length >= 3) {
      setSelectedCompaniesList(selectedCompaniesList => {
        selectedCompaniesList.pop()
        return [...selectedCompaniesList];
      })
    }
    if(!mobileView && selectedCompaniesList.length <= 2) {
      setSelectedCompaniesList(selectedCompaniesList => {
        selectedCompaniesList.push('')
        return [...selectedCompaniesList];
      })
    }
    }, [mobileView, selectedCompaniesList])

  // const renderArr = (arr) => {
  //   console.log("yes")
  //   {arr.map((companies, i) => {
  //     <div key = {i}>
  //       <span>{companies}</span>
  //     </div>
  //    })}
  // }
  const WomenMenu = () => {
    setSportMenu(false);
    setUnisexMenu(false);
    setShoeMenu(false);
    const arr = []
    companies.companies.map(company => {
        if(company.category === "Women")
          arr.push(company.name);
      }
    )

    return(
      <div className='compare-search-category-menu'>
        <CloseSharpIcon style = {{marginLeft: '-5%', width: '8%'}}/>
        <div className = 'content-category-dropdown'>
         {arr.map((companies, i) => {
           return <Link style = {{color: '#3D3E3F', textDecoration: 'none'}}to = {'/companies/' + companies}key = {i}>{companies}</Link>
         })}
         </div>
      </div>
    )
  }

  const ShoeMenu = () => {
    setUnisexMenu(false);
    setShoeMenu(false);
    setWomenMenu(false);
    const arr = []
    companies.companies.map(company => {
        if(company.category === "Shoes")
          arr.push(company.name);
      }
    )

    return(
      <div className='compare-search-category-menu'>
        <CloseSharpIcon style = {{marginLeft: '-5%', width: '8%'}}/>
        <div className = 'content-category-dropdown'>
         {arr.map((companies, i) => {
           return <Link style = {{color: '#3D3E3F', textDecoration: 'none'}}to = {'/companies/' + companies}key = {i}>{companies}</Link>
         })}
         </div>
      </div>
    )
  }

  const UnisexMenu = () => {
    setShoeMenu(false);
    setWomenMenu(false);
    setSportMenu(false);
    const arr = []
    companies.companies.map(company => {
        if(company.category === "Unisex")
          arr.push(company.name);
      }
    )

    return(
      <div className='compare-search-category-menu'>
        <CloseSharpIcon style = {{marginLeft: '-5%', width: '8%'}}/>
        <div className = 'content-category-dropdown'>
         {arr.map((companies, i) => {
           return <Link style = {{color: '#3D3E3F', textDecoration: 'none'}}to = {'/companies/' + companies}key = {i}>{companies}</Link>
         })}
         </div>
      </div>
    )
  }

  const SportsMenu = () => {
    setShoeMenu(false);
    setWomenMenu(false);
    setUnisexMenu(false);
    const arr = []
    companies.companies.map(company => {
        if(company.category === "Sportswear")
          arr.push(company.name);
      }
    )

    return(
      <div className='compare-search-category-menu'>
        <CloseSharpIcon style = {{marginLeft: '-5%', width: '8%'}}/>
        <div className = 'content-category-dropdown'>
         {arr.map((companies, i) => {
           return <Link style = {{color: '#3D3E3F', textDecoration: 'none'}}to = {'/companies/' + companies}key = {i}>{companies}</Link>
         })}
         </div>
      </div>
    )
  }

  return (
    <div className="main-Compare-Container">
      {/* <Grid container> */}
        {/* <Grid item xs={4} style={{border: 'solid'}}> */}
        <div className="row-1" >
          {/* <Col style={{marginTop: '25%', marginLeft: '50%', border: 'solid', paddingRight: '20%'}}> */}
          {/* <div> */}
            <p id="brands" >
              Brands
            </p>
            <p
              style={{
                marginBottom: 20,
                color: "#4F4F4F",
                lineHeight: "24px",
                fontSize: "14px",
              }}
            >
              Type or click the brands that you want to learn more about.
            </p>
            <CompareSearch />
          {/* </div> */}
          {/* </Col> */}
        </div>
        {/* </Grid> */}
        {/* <Grid item xs={8} style={{border: 'solid'}}> */}
        <div className="row-2">
          <div className="apparel-container">
            <div
              style={{
                textAlign: "center",
                marginTop: "14%",
                // marginBottom: "2%",
              }}
            >
              <p id="apparel">Apparel Comparison Chart</p>
              <p style={{ lineHeight: "28px" }} className='text-1'>
              The scores reflect brands’ commitment towards addressing each issue
              </p>
              {/* <p>
              The colours represent the brand’s performance benchmarked to industry standards
              </p> */}
              <p style={{ lineHeight: "38px" }} className="text-1">
                The colors represent the brand's performance benchmarked to
                industry standards.
              </p>
            </div>
            <div className="avg-container">
              <div className='avg-item'>
                <span id="blwavg"></span>
                <span className="avgtext">Below average</span>
              </div>
              <div className='avg-item'>
                <span id="avg"></span>
                <span className="avgtext">Average</span>
              </div>
              <div className='avg-item'>
                <span id="abvavg"></span>
                <span className="avgtext">Above average</span>
              </div>
              <div className='avg-item'>
                <span id="NAavg"></span>
                <span className="avgtext">Not applicable</span>
              </div>
            </div>
          </div>
          {/* </Grid> */}
          <div className="mobile-search-box">
            <input
              placeholder="Search All Brands"
              value={inputValue}
              onChange={handleChange}
              onFocus={() => setShowList(true)}
              onBlur={() => setTimeout(() => setShowList(false), 200)}
            />
            <i
              className="mobile-search-box-arrow"
              onClick={() => setShowList(!showList)}
            ></i>
            {showList && (
              <div className="mobile-search-companyList">
                {searchList.map((item, index) => {
                  return (
                    <div key={index} onClick={() => addBrand(item)}>
                      {item}
                    </div>
                  );
                })}
              </div>
            )}
            <div className='compare-search-category-container' >
                <div onClick={() => setSportMenu(!showSportMenu)}  className='compare-search-category'>
                  Sportswear 
                  <ArrowDropDownIcon/>
                  {showSportMenu && <SportsMenu />}
                </div>
                <div onClick = {() => setUnisexMenu(!showUnisexMenu)}  className='compare-search-category'>
                  Unisex
                  <ArrowDropDownIcon/>
                  {showUnisexMenu && <UnisexMenu />}
                  </div>
                <div onClick = {() => setWomenMenu(!showWomenMenu)} className='compare-search-category'>
                  Women 
                  <ArrowDropDownIcon/>
                  {showWomenMenu && <WomenMenu />}
                  </div>
                <div onClick = {() => setShoeMenu(!showShoeMenu)} className='compare-search-category'>
                  Shoes & Accessories 
                  <ArrowDropDownIcon/>
                  {showShoeMenu && <ShoeMenu />}
                  </div>
                <div className='compare-search-category compare-search-category-inactive'>Luxury <ArrowDropDownIcon/></div>
            </div>
          </div>
          <CompareTool
            inputBrand={inputBrand}
            setInputBrands={setInputBrands}
            selectedCompaniesList={selectedCompaniesList}
            fetchBrand={fetchBrand}
            removeBrand={removeBrand}
          />
        </div>
      {/* </Grid> */}
    </div>
  );
};

export default Comparison;
