import React, { useEffect, useState, useLayoutEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "../styles/Comparison.css";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
//import CompareTool from '../components/CompareTool';
import CompareTool from "../components/CompareTool-new";

import CompareSearch from "../components/CompareSearch";

const Comparison = () => {
  const [companyList, setCompanyList] = useState([]);
  const [showList, setShowList] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedCompaniesList, setSelectedCompaniesList] = useState(["","",""]);
  const [ mobileView, setMobileView ] = useState(window.innerWidth < 600)
  const [showSearchMenu, setSearchMenu] = useState(false)

  const handleChange = (e) => {
    setInputValue(e.target.value);
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

  const SearchMenu = () => {

    return(
      <div className='compare-search-category-menu'>
        <span>Adidas</span>
        <span>Nike</span>
        <span>Ribok</span>
        <span>Puma</span>
        <span>Brand X</span>
        <span>Adidas</span>
        <span>Nike</span>
        <span>Ribok</span>
        <span>Puma</span>
        <span>Brand X</span>
      </div>
    )
  }

  return (
    <div>
      <Grid container>
        {/* <Grid item xs={4} style={{border: 'solid'}}> */}
        <Row
          style={{ marginLeft: "6%", width: "20%", maxWidth:'230px', minWidth:'200px' ,marginTop: "10%" }}
          className="row-1"
        >
          {/* <Col style={{marginTop: '25%', marginLeft: '50%', border: 'solid', paddingRight: '20%'}}> */}
          <span>
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
              Type or click the brands that you want to learn more about
            </p>
            <CompareSearch />
          </span>
          {/* </Col> */}
        </Row>
        {/* </Grid> */}
        {/* <Grid item xs={8} style={{border: 'solid'}}> */}
        <Row className="row-2">
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
              onBlur={() => setTimeout(() => setShowList(false), 200)}
            />
            <i
              className="mobile-search-box-arrow"
              onClick={() => setShowList(!showList)}
            ></i>
            {showList && (
              <div className="mobile-search-companyList">
                {companyList.map((item, index) => {
                  return (
                    <div key={index} onClick={() => addBrand(item)}>
                      {item}
                    </div>
                  );
                })}
              </div>
            )}
            <div className='compare-search-category-container' >
                <div onClick={() => setSearchMenu(!showSearchMenu)}  className='compare-search-category'>
                  Sportswear 
                  <ArrowDropDownIcon/>
                  {showSearchMenu && <SearchMenu />}
                </div>
                <span className='compare-search-category'>Unisex <ArrowDropDownIcon/></span>
                <span className='compare-search-category'>Women <ArrowDropDownIcon/></span>
                <span className='compare-search-category'>Shoes & Accessories <ArrowDropDownIcon/></span>
                <span className='compare-search-category compare-search-category-inactive'>Luxury <ArrowDropDownIcon/></span>
            </div>
          </div>
          <CompareTool
            selectedCompaniesList={selectedCompaniesList}
            fetchBrand={fetchBrand}
            removeBrand={removeBrand}
          />
        </Row>
      </Grid>
    </div>
  );
};

export default Comparison;
