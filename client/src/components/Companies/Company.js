import React, { useEffect, useState, useLayoutEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid';
import { Link, useParams, withRouter, useLocation } from 'react-router-dom';
import '../../styles/Companies.css';
import DiversityImg from '../../assets/diversity.png';
import WorkerExploitImg from '../../assets/workerexploit.png';
import WasteImg from '../../assets/wastepollution.png';
import SustainableImg from '../../assets/sustainable.png';
import DropdownButton from '../../assets/dropdownbutton.png';
import NewsPlaceHolder from '../../assets/news.png';
import { makeStyles } from '@material-ui/core/styles';
import Modal, { ModalManager } from '@material-ui/core/Modal';
import ModalBody from '../ModalBody';
import InfoIcon from "@material-ui/icons/Info";
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import axios from 'axios';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AiFillCaretDown } from 'react-icons/ai';
import TextTruncate from 'react-text-truncate';
import Resizer from "react-image-file-resizer";

import BrandLogo from '../../assets/brandBreakdown.svg';
import { pink } from '@material-ui/core/colors';
import BrandBreakdown from '../../pages/BrandBreakdown-new';

const companyinfo = [
    {
    A_ID: 0,
    B_ID: 0,
    C_ID: 0,
    D_ID: 0,
    TotalScore: 0,
    Category: "",
    Description: "",
    IndustryStandardsID: 0,
    Logo: 0,
    Name: "",
    SimilarCompany1: "",
    SimilarCompany2: "",
    SimilarCompany3: "",
    SimilarCompany4: "",
    Subsidiary: "",
    CompanyID: ""
    }
]

const companyFacts = [
    {
        CompanyID: 0,
        Heading: "",
        Summary: ""
    }
]

const companyNews = [
    {
        CompanyID: 0,
        Photo: "",
        Category: "",
        Year: 0,
        Title: "",
        Summary: "",
        Responsibility: "",
        Explanation: "",
        IssueAddressed: "",
        IssueExplained: ""
    }
]

const companyCit = [
    {
        RelationalID: "",
        Author: "",
        Date: "",
        PublishingGroup: "",
        Title: "",
        Pages: ""
    }
]

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    dropdown:{ 
        width: '90%',
        boxShadow: 'none'
    },
    heading:{
        fontFamily: 'DM Sans',
        color: '#3D3E3F',
        fontSize: '16px'
    },
    expandMenu:{
        backgroundColor: '#F2F2F2'
    },
    paper: {
      position: 'absolute',
      width: 900,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    dropdown:{ 
        width: '90%',
        boxShadow: 'none',
    },
    heading:{
        fontFamily: 'DM Sans',
        color: '#3D3E3F',
        fontSize: '16px'
    },
    expandMenu:{
        fontFamily: 'DM Sans',
        fontWeight: 'normal',
        fontSize: '16px'
     },
    paper: {
        position: 'absolute',
        width: 900,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

  function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}


  function Company ({match, location})  {
    const {
        params: { companyName }
    } = match;

    
    const [showFact,setShowFact] = useState(false);
    
    const findLocation = useLocation();
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [openID, setOpenID] = useState(0);
    const [showInfo, setShowInfo] = useState(false)
    const [companyDetails, setCompanyDetails] = React.useState(companyinfo);
    // const [brandScores, setBrandScores] = React.useState(companyScores);
    const [fact, setFact] = React.useState(companyFacts);
    const [news, setNews] = React.useState(companyNews);
    const [citations, setCitations] = React.useState(companyCit);
    const {loading, setLoading} = useState(false);
    const [state, setState] = useState([])
    const [A, setA] = useState(0);
    const [B, setB] = useState(0);
    const [C, setC] = useState(0);
    const [D, setD] = useState(0);
    

    const handleCloseInfo = () => {
        setShowInfo(false)
    }

    const handleOpen = (k, ID) => {
        axios.post('/citations',
            {},
            {
                params: [companyName, ID, 'N']
            }
        ).then(resp => {
            let data = citations;
            let relidarr = [];
            let authorarr = [];
            let datearr = [];
            let pubarr = [];
            let titlearr = [];
            let urlarr = [];
            let pagesarr = [];
            resp.data.map(citation => {
                relidarr.push(citation["RelationalID"]);
                authorarr.push(citation["Author"]);
                datearr.push(citation["Date"]);
                pubarr.push(citation["PublishingGroup"]);
                titlearr.push(citation["Title"]);
                urlarr.push(citation["URL"]);
                pagesarr.push(citation["Pages"]);
            })
            data[0]["RelationalID"] = relidarr;
            data[0]["Author"] = authorarr;
            data[0]["Date"] = datearr;
            data[0]["PublishingGroup"] = pubarr;
            data[0]["Title"] = titlearr;
            data[0]["URL"] = urlarr;
            data[0]["Pages"] = pagesarr;
            setCitations(data);
            setState(resp.data);
            console.log(citations);
        })
        setOpenID(k);
        setOpen(true);
    };    

    const handleClose = () => {
        setOpen(false);
    };


    const toggleFact = ()=> {
        setShowFact(!showFact)
    }

    const body = (
          <ModalBody handleClose={handleClose} i={openID} title={news[0]["Title"]} summary={news[0]["Summary"]}
          issueAdd={news[0]["IssueAddressed"]} issueAddExp={news[0]["IssueAddressedExplanation"]} respTake={news[0]["ResponsibilityTaken"]} respTakenExp = {news[0]["ResponsibilityTakenExplanation"]} newsID={news[0]["ID"]} citID={citations[0]["RelationalID"]} author={citations[0]["Author"]} cittitle={citations[0]["Title"]} pubgroup = {citations[0]["PublishingGroup"]} date = {citations[0]["Date"]} pages = {citations[0]["Pages"]} url = {citations[0]["URL"]} />
      );

    const Popup = ({handleCloseInfo}) => {

        return (
            <div className="company-popup">
                <div className='company-popup-content'>
                    <div style={{display:'flex', flexDirection:'column', marginTop:'1rem'}}>
                        <div>Brand Performance</div>
                        <div style={{fontSize:'16px', fontWeight:'500'}}>
                            Mobile Vulputate sit condimentum nulla eget placerat tincidunt.
                        </div>
                    </div>
                    <HighlightOffRoundedIcon onClick={handleCloseInfo} className="popup-close-icon"/>
                </div>
            </div>
        )
    };

    const RenderFact = ({item}) => {
        const [showFact, setShowFact] = useState(false);
        const [showCitation, setShowCitation] = useState(false);

        useEffect(() => {
            if(showFact === false) {
                setShowCitation(false)
            }
        }, [showFact])
        
        return(
            <div>
                <div className = 'Fun-Fact'>{item.title}
                    <div
                        className={showFact ? "Fun-Fact-circle-close" : "Fun-Fact-circle"}
                        onClick={() => setShowFact(!showFact)}
                        >
                        <i className={showFact ? "Fun-Fact-arrowdown-close" : "Fun-Fact-arrowdown"}></i>
                    </div>
                </div>
                <div className = {`fact-animate-field ${showFact ? 'fact-animate' : ''}`}>
                {
                    showFact ? 
                        <div className = "Fun-Fact-Dropdown">
                            {item.discription}
                            <div className = 'Fun-Fact-Citation' style={{width:'100%', fontWeight:'700'}}>
                                Citation
                                <i onClick={() => setShowCitation(!showCitation)} style={{borderColor:'#323232'}} className={showCitation ? "Fun-Fact-arrowdown-close" : "Fun-Fact-arrowdown"}></i>
                            </div>
                            {
                                showCitation ? <div>{item.citation}</div> : null
                            }
                        </div> : null
                }
                </div>
                <div className = 'FunFact-Decorative-Line'></div>
            </div>
        )

    }

    const BrandPerformance = () => {

        const [tabView, setTabView] = useState(window.innerWidth < 800);
        
        useLayoutEffect(() => {
            function updateSize() {
              if (window.innerWidth > 800) {
                setTabView(false);
              } else {
                setTabView(true);
              }
            }
            window.addEventListener("resize", updateSize);
            updateSize();
            return () => window.removeEventListener("resize", updateSize);
          }, []);

        if(!tabView) { //web view
            return(
                <div className='brand_info-text'>Performance is scored following an assessment of company policies, practices and actions taken in each of the following categories. To understand the scores given, click on Detailed Breakdown</div>
                )
        } else if ( showInfo && tabView ) { //tab view
            return(
                    <Popup handleCloseInfo={handleCloseInfo} />
                )
        } else return null

    }

    const CompanyInitiative = () => {

        const [tabView, setTabView] = useState(window.innerWidth < 800);
        
        useLayoutEffect(() => {
            function updateSize() {
              if (window.innerWidth > 800) {
                setTabView(false);
              } else {
                setTabView(true);
              }
            }
            window.addEventListener("resize", updateSize);
            updateSize();
            return () => window.removeEventListener("resize", updateSize);
          }, []);

        if(!tabView) { //web view
            return(
                <div className='brand_info-text'>A showcase of brand initiatives and achievements that are not directly correlated to the scores given</div>
                )
        } else if ( showInfo && tabView ) { //tab view
            return(
                    <Popup handleCloseInfo={handleCloseInfo} />
                )
        } else return null

    }

    const InTheNews = () => {

        const [tabView, setTabView] = useState(window.innerWidth < 800);
        
        useLayoutEffect(() => {
            function updateSize() {
              if (window.innerWidth > 800) {
                setTabView(false);
              } else {
                setTabView(true);
              }
            }
            window.addEventListener("resize", updateSize);
            updateSize();
            return () => window.removeEventListener("resize", updateSize);
          }, []);

        if(!tabView) { //web view
            return(
                <div className='brand_info-text'>News and recent events summarized with an assessment of the company’s actions taken in response</div>
                )
        } else if ( showInfo && tabView ) { //tab view
            return(
                    <Popup handleCloseInfo={handleCloseInfo} />
                )
        } else return null

    }

    const newsDiscriptionTitle = "Nike allegedly discriminates against women at its corporate headquarters";
    const newsDiscriptionInfo = "Fed up with feeling marginalized working at the Nike headquarters, a group of female employees began secretly surveying their coworkers on their experiences with gender discrimination....";

    useEffect(() => {
        // setLoading(true);
        // let data = companyDetails;
        axios.post(
            '/companyscores',
            {},
                {
                    params: companyName
                }
        ).then((resp) => {
            console.log(resp.data);
            let data = companyDetails;
            let score = (parseInt(resp.data[0]["Ascore"]) + parseInt(resp.data[0]["Bscore"]) + parseInt(resp.data[0]["Cscore"]) + parseInt(resp.data[0]["Dscore"]))/4;
            data[0]["TotalScore"] = score;
            data[0]["Ascore"] = resp.data[0]["Ascore"];
            data[0]["Bscore"] = resp.data[0]["Bscore"];
            data[0]["Cscore"] = resp.data[0]["Cscore"];
            data[0]["Dscore"] = resp.data[0]["Dscore"];
            let ratio = 324*score/100;
            data[0]["SliderLength"] = ratio;
            setCompanyDetails(data);
            setState(resp.data);
        });

        axios.post(
            '/companyname', 
            {},
                {
                    params: companyName
                }
            )
            .then((resp) => {
                console.log(resp.data);
                let data = companyDetails;
                // data[0]["A_ID"] = resp.data[0]["A_ID"];
                // data[0]["B_ID"] = resp.data[0]["B_ID"];
                // data[0]["C_ID"] = resp.data[0]["C_ID"];
                // data[0]["D_ID"] = resp.data[0]["D_ID"];
                data[0]["Category"] = resp.data[0]["Category"];
                data[0]["Description"] = resp.data[0]["Description"];
                data[0]["IndustryStandardsID"] = resp.data[0]["IndustryStandardsID"];
                data[0]["Logo"] = resp.data[0]["Logo"];
                data[0]["Name"] = resp.data[0]["Name"];
                data[0]["SimilarCompany1"] = resp.data[0]["SimilarCompany1"];
                data[0]["SimilarCompany2"] = resp.data[0]["SimilarCompany2"];
                data[0]["SimilarCompany3"] = resp.data[0]["SimilarCompany3"];
                data[0]["SimilarCompany4"] = resp.data[0]["SimilarCompany4"];
                data[0]["Subsidiary"] = resp.data[0]["Subsidiary"];
                console.log(data[0]["Subsidiary"]);
                setCompanyDetails(data);
                setState(resp.data);
            })
        axios.post(
            '/similarCompany1',
            {},
            {
                params: companyName
            }
        ).then((resp) =>{
            // console.log(resp.data);
            let data = companyDetails;
            data[0]["company1Ascore"] = resp.data[0]["Ascore"];
            data[0]["company1Bscore"] = resp.data[0]["Bscore"];
            data[0]["company1Cscore"] = resp.data[0]["Cscore"];
            data[0]["company1Dscore"] = resp.data[0]["Dscore"];
            let company1TotalScore = (parseInt(data[0]["company1Ascore"]) + parseInt(data[0]["company1Bscore"]) + parseInt(data[0]["company1Cscore"]) + parseInt(data[0]["company1Dscore"]))/4;
            let comp1SliderLength = 324*company1TotalScore/100
            data[0]["company1TotalScore"] = company1TotalScore;
            data[0]["comp1SliderLength"] = comp1SliderLength;
            // console.log(company1TotalScore);
        })
        axios.post(
            '/similarCompany2',
            {},
            {
                params: companyName
            }
        ).then((resp) =>{
            // console.log(resp.data);
            let data = companyDetails;
            data[0]["company2Ascore"] = resp.data[0]["Ascore"];
            data[0]["company2Bscore"] = resp.data[0]["Bscore"];
            data[0]["company2Cscore"] = resp.data[0]["Cscore"];
            data[0]["company2Dscore"] = resp.data[0]["Dscore"];
            let company2TotalScore = (parseInt(data[0]["company2Ascore"]) + parseInt(data[0]["company2Bscore"]) + parseInt(data[0]["company2Cscore"]) + parseInt(data[0]["company2Dscore"]))/4;
            let comp2SliderLength = 324*company2TotalScore/100
            data[0]["company2TotalScore"] = company2TotalScore;
            data[0]["comp2SliderLength"] = comp2SliderLength;
            // console.log(company2TotalScore);
        })
        axios.post(
            '/similarCompany3',
            {},
            {
                params: companyName
            }
        ).then((resp) =>{
            console.log(resp.data);
            let data = companyDetails;
            data[0]["company3Ascore"] = resp.data[0]["Ascore"];
            data[0]["company3Bscore"] = resp.data[0]["Bscore"];
            data[0]["company3Cscore"] = resp.data[0]["Cscore"];
            data[0]["company3Dscore"] = resp.data[0]["Dscore"];
            let company3TotalScore = (parseInt(data[0]["company3Ascore"]) + parseInt(data[0]["company3Bscore"]) + parseInt(data[0]["company3Cscore"]) + parseInt(data[0]["company3Dscore"]))/4;
            let comp3SliderLength = 324*company3TotalScore/100
            data[0]["company3TotalScore"] = company3TotalScore;
            data[0]["comp3SliderLength"] = comp3SliderLength;
        })
        axios.post(
            '/similarCompany4',
            {},
            {
                params: companyName
            }
        ).then((resp) =>{
            // console.log(resp.data);
            let data = companyDetails;
            data[0]["company4Ascore"] = resp.data[0]["Ascore"];
            data[0]["company4Bscore"] = resp.data[0]["Bscore"];
            data[0]["company4Cscore"] = resp.data[0]["Cscore"];
            data[0]["company4Dscore"] = resp.data[0]["Dscore"];
            let company4TotalScore = (parseInt(data[0]["company4Ascore"]) + parseInt(data[0]["company4Bscore"]) + parseInt(data[0]["company4Cscore"]) + parseInt(data[0]["company4Dscore"]))/4;
            let comp4SliderLength = 324*company4TotalScore/100
            data[0]["company4TotalScore"] = company4TotalScore;
            data[0]["comp4SliderLength"] = comp4SliderLength;
        })
                axios.post(
                    '/facts', 
                    {},
                        {
                            params: companyName
                        }
                    )
                    .then((resp) => {
                        let data = companyFacts;
                        let headingsarr = [];
                        let summaryarr = [];
                        let idarr = [];
                        resp.data.map(fact => {
                            headingsarr.push(fact['Heading']);
                            summaryarr.push(fact['Summary']);
                            idarr.push(fact['ID']);
                        })
                        data[0]['Heading'] = headingsarr;
                        data[0]['Summary'] = summaryarr;
                        data[0]["ID"] = idarr;
                        setFact(data);
                        setState(resp.data);
                    })
                    axios.post(
                        '/news', 
                        {},
                            {
                                params: companyName
                            }
                        )
                        .then((resp) => {
                            let data = companyNews;
                            let photoarr = [];
                            let yeararr = [];
                            let catarr = [];
                            let titlearr = [];
                            let summarr = [];
                            let issueaddarr = [];
                            let issueexparr = [];
                            let resptakearr = [];
                            let respexparr = [];
                            let idarr = [];
                            resp.data.map(news => {
                                photoarr.push(news['Photo']);
                                yeararr.push(news['Year']);
                                catarr.push(news['Category']);
                                titlearr.push(news['Title']);
                                summarr.push(news['Summary']);
                                issueaddarr.push(news['IssueAddressed']);
                                issueexparr.push(news['IssueAddressedExplanation']);
                                resptakearr.push(news['ResponsibilityTaken']);
                                respexparr.push(news['ResponsibilityTakenExplanation']);
                                idarr.push(news['ID']);
                            })
                            data[0]["Photo"] = photoarr;
                            data[0]["Year"] = yeararr;
                            data[0]["Category"] = catarr;
                            data[0]["Title"] = titlearr;
                            data[0]["Summary"] = summarr;
                            data[0]["IssueAddressed"] = issueaddarr;
                            data[0]["IssueAddressedExplanation"] = issueexparr;
                            data[0]["ResponsibilityTaken"] = resptakearr;
                            data[0]["ResponsibilityTakenExplanation"] = respexparr;
                            data[0]["ID"] = idarr;
                            setNews(data);
                            setState(resp.data);
                        })
    }, [findLocation]);

    const Facts = (factinput) => {
        const [factCitation, setFactCitation] = useState([]);
        const [showCitation, setShowCitation] = useState(false);

        const FactCitations = (i) => {
            if (factCitation.length != 0) {
                console.log(factCitation);
                return factCitation[0]["Date"].map((date, k) => {
                    return <div><i>{factCitation[0]["Title"][i]}</i>, {factCitation[0]["PublishingGroup"][i]}, {factCitation[0]["Date"][i]}, {factCitation[0]["Pages"][i]}</div>
                })
            }
        }

        const showCitations = (i, j) => {
            console.log(showCitation);
            if (showCitation == false) setShowCitation(true);
            if (showCitation == true) setShowCitation(false);
            // if (showCitation == -1) {
            //     setShowCitation(j);
            //     console.log(showCitation);
            // }
            // if (showCitation == j) {
            //     setShowCitation(-1);
            //     console.log(showCitation);
            // }
                axios.post('/citationsFacts',
                    {},
                    {
                        params: [companyName, i, 'F']
                    }
                ).then(resp => {
                    let data = citations;
                    let relidarr = [];
                    let authorarr = [];
                    let datearr = [];
                    let pubarr = [];
                    let titlearr = [];
                    let urlarr = [];
                    let pagesarr = [];
                    resp.data.map(citation => {
                        relidarr.push(citation["RelationalID"]);
                        authorarr.push(citation["Author"]);
                        datearr.push(citation["Date"]);
                        pubarr.push(citation["PublishingGroup"]);
                        titlearr.push(citation["Title"]);
                        urlarr.push(citation["URL"]);
                        pagesarr.push(citation["Pages"]);
                    })
                    data[0]["RelationalID"] = relidarr;
                    data[0]["Author"] = authorarr;
                    data[0]["Date"] = datearr;
                    data[0]["PublishingGroup"] = pubarr;
                    data[0]["Title"] = titlearr;
                    data[0]["URL"] = urlarr;
                    data[0]["Pages"] = pagesarr;
                    setFactCitation(data);
                    console.log(factCitation);
                })
        }
        return Object.entries(factinput[0]['Heading']).map((heading, i) => {
            console.log(factCitation);
            return <div>
                <Accordion className = {classes.dropdown}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className = 'circle-new'/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>{heading[1]}</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{backgroundColor: '#F2F2F2'}}>
                        <Typography className = {classes.expandMenu}>
                            {factinput[0]['Summary'][i]}
                            <div
              className="Fun-Fact"
              style={{ width: "100%", fontWeight: "700" }}
            >
              Citation 
              <i
                onClick={() => showCitations(factinput[0]["ID"][i], i)}
                style={{ borderColor: "#323232" }}
                className={`Fun-Fact-arrowdown ${showCitation ? "Fun-Fact-arrowdown-rotate" : ""}`}
              ></i>
            </div>
            {showCitation ? 
            <div>
                {FactCitations(i)}
            </div>
            : null}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <div className = 'FunFact-Decorative-Line'></div>
            </div>
        })
    }

    const News = (newsinput) => {
        // console.log(factCitation);
        return Object.entries(newsinput[0]['Category']).map((category, i) => {
            //console.log(newsinput[0]["Title"][i]);
            return <div>
            <div className='news-card'>
                <img src={newsinput[0]["Photo"][i]} style={{background: 'rgba(87, 114, 104, 0.5)'}} />
                <div className='news-category'>
                    <span className='news-category-title'>{category[1]}</span>
                    <span className='news-category-year'>{newsinput[0]["Year"][i]}</span>
                </div>
                <div style={{marginTop: '3%'}} className = 'News-Description'>
                    <div className = 'News-Description-title'>{newsinput[0]["Title"][i]}</div>
                    
                    <TextTruncate
                        line={3}
                        containerClassName = 'News-Description-info'
                        element="div"
                        truncateText="…"
                        text={newsinput[0]["Summary"][i]}
                    />

                    {/* <div className = 'News-Description-info'>{newsinput[0]["Summary"][i]}</div> */}
                    <div style={{fontSize:'14px'}}>
                        <span>Responsibility Taken?</span>

                        {newsinput[0]["ResponsibilityTaken"][i] == "No" &&
                            <span style={{color:'#E94921', marginLeft:'5px'}}>{newsinput[0]["ResponsibilityTaken"][i]}</span>
                        ||
                        newsinput[0]["ResponsibilityTaken"][i] == "Yes" &&
                            <span style={{color:'#28a745', marginLeft:'5px'}}>{newsinput[0]["ResponsibilityTaken"][i]}</span>
                        ||
                        newsinput[0]["ResponsibilityTaken"][i] == "Maybe" &&
                            <span style={{color:'#F29A72', marginLeft:'5px'}}>{newsinput[0]["ResponsibilityTaken"][i]}</span>
                        }


                    </div>
                    <div style={{fontSize:'14px', display:'flex', position:'relative'}}>
                        <span>Issue Addressed?</span>

                        
                        {newsinput[0]["IssueAddressed"][i] == "No" &&
                            <span style={{color:'#E94921', marginLeft:'5px'}}>{newsinput[0]["IssueAddressed"][i]}</span>
                        || 
                        newsinput[0]["IssueAddressed"][i] == "Yes" &&
                            <span style={{color:'#28a745', marginLeft:'5px'}}>{newsinput[0]["IssueAddressed"][i]}</span>
                        || 
                        newsinput[0]["IssueAddressed"][i] == "Maybe" &&
                            <span style={{color:'#F29A72', marginLeft:'5px'}}>{newsinput[0]["IssueAddressed"][i]}</span>
                        }
                        <button className='News-read-more-btn' onClick={() => handleOpen(i, news[0]["ID"][i])}>Read more</button>
                    </div>
                </div>
            </div>
        </div>
        })
    }

    return(
        <div className = 'Layout'>
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <div className = 'Left-Menu'>                
                    <div>
                        <img className='brand-logo' src={`${companyDetails[0]["Logo"]}`} alt={`${companyDetails[0]["Logo"]}`} />
                        
                        {/* conditional rendering for subsidiary */}
                        { companyDetails[0]["Subsidiary"] != null  &&
                            <div style={{fontSize:'14px', fontWeight:'500', color:'#797979', margin:'10px 0'}}>Subsidiary of {companyDetails[0]["Subsidiary"]}</div>
                        }

                        <p style={{marginTop:"5%", color: '#4F4F4F'}}><b>{companyDetails[0]["Name"]}</b> {companyDetails[0]["Description"]}</p>
                    </div>
                    <div>
                        <div style={{fontFamily: 'DM Sans', fontWeight: 500, fontSize: '14px', marginLeft: '105px'}}>industry average</div>
                        <AiFillCaretDown style={{marginLeft: '155px'}}/>
                        {/* {companyDetails[0]["SliderLength"]} */}
                        <div class="horizontalline" style={{width: `${companyDetails[0]["SliderLength"]}px` }}></div>
                        <div class="verticalline"></div>
                        <img src="https://github.com/sophiasharifi/monestco/blob/main/images/slider%20backgroud.png?raw=true"/>
                        <p style={{fontFamily: 'DM Sans', fontSize: '12px', color: '#4F4F4F'}} >underperforming<span style={{marginLeft: '145px'}}>overperforming</span></p>
                        <div className="brand_inside_text">
                            <span className='navy'>{Math.round(companyDetails[0]["TotalScore"], 2)}</span>
                            <span>/100</span>
                        </div>
                        <Link to={`/brand-breakdown/${companyName}`} className='breakDown-link'>Detailed Breakdown</Link>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={8}>
                <div className = 'Right-Menu' style={{marginTop: '7%', marginLeft: '0.5rem'}}>
                    <div className = 'Brand-Section-title'>
                        Brand Performance 
                        <InfoIcon className='brand_info-icon' onClick={() => setShowInfo(!showInfo)} />
                        <BrandPerformance />
                    </div>
                    <div className = 'Decorative-Line'></div>
                
                    <div className = 'Brand-Performance'>
                            <div className = 'Brand-Performance-container'>
                                <div>
                                    DIVERSITY & INCLUSION
                                    <div className = 'Description'>
                                        <div className='Description-text'>
                                            Discrimination, Gender Equality, <br></br>Cultural Diversity, Inclusivity
                                        </div>
                                        <div className='Description-data'>
                                        <img src = {DiversityImg}/>
                                        <div className="Description-score"><span>{companyDetails[0]["Ascore"]}</span><span>/100</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    WORKER EXPLOITATION
                                    <div className = 'Description'>
                                        <div className='Description-text'>
                                            Child Labour, Forced Labour, <br></br> Living Wage, Working Conditions
                                        </div>
                                        <div className='Description-data'>
                                        <img src = {WorkerExploitImg}/>
                                        <div className="Description-score"><span>{companyDetails[0]["Bscore"]}</span><span>/100</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    WASTE & POLLUTION
                                    <div className = 'Description'>
                                        <div className='Description-text'>
                                            Air Pollution, Water Pollution & Waste, <br></br> Packaging Waste, Material Waste
                                        </div>
                                        <div className='Description-data'>
                                        <img src = {WasteImg}/>
                                        <div className="Description-score"><span>{companyDetails[0]["Cscore"]}</span><span>/100</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    ETHICAL SOURCING
                                    <div className = 'Description'>
                                        <div className='Description-text'>
                                            Cotton Farming, Deforestation, Animal Welfare
                                        </div>
                                        <div className='Description-data'>
                                        <img src = {SustainableImg}/>
                                        <div className="Description-score"><span>{companyDetails[0]["Dscore"]}</span><span>/100</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className = 'Brand-Section-title'>
                        Company Initiatives 
                        <InfoIcon className='brand_info-icon' onClick={() => setShowInfo(!showInfo)} />
                        <CompanyInitiative />
                        </div>

                        <div className = 'Decorative-Line'></div>
                        {Facts(fact)}
    
                    
                    <div className = 'In-The-News'>
                        <div className = 'Brand-Section-title'>
                            In The News
                            <InfoIcon className='brand_info-icon' onClick={() => setShowInfo(!showInfo)} />
                             <InTheNews />
                            </div>
                        <div className = 'Decorative-Line'></div>
                            <div className='In-The-News-container'>
                                {News(news)}
                            </div>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                            >
                                {body}
                            </Modal>
                    
                    </div>
                    <div className="similar_brands">
                        <div className = 'Brand-Section-title'>Similar Brands</div>
                        <div className = 'Decorative-Line'></div>
                        <div className="similar_brands-container"> 
                            <div>
                                <Link className = 'Similar-Link' to = {'/companies/'+ companyDetails[0]["SimilarCompany1"]}>{companyDetails[0]["SimilarCompany1"]}</Link> 
                                {/* <div>{companyDetails[0]["SimilarCompany1"]}</div> */}
                                <div className='brand_box'> 
                                    <div className="d-fledx justify-content-center">
                                    <div style={{fontFamily: 'DM Sans', fontWeight: 500, fontSize: '14px', marginTop: '8%', textAlign: 'center'}}>industry average</div>
                                        <div style={{textAlign: 'center'}}><AiFillCaretDown style={{}}/></div>
                                        <div class="horizontalline2" style={{width: `${companyDetails[0]["comp1SliderLength"]}px` }}></div>
                                        <div class="verticalline2"></div> 
                                        <img src="https://github.com/sophiasharifi/monestco/blob/main/images/slider%20backgroud.png?raw=true" className="brand_logo"/>     
                                    </div>
                                    <div className="brand_inside_text ml-10perc">
                                        <span>{Math.round(companyDetails[0]["company1TotalScore"], 2)}</span>
                                        <span>/100</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link className = 'Similar-Link' to = {'/companies/'+ companyDetails[0]["SimilarCompany2"]}>{companyDetails[0]["SimilarCompany2"]}</Link> 
                                {/* <div>{companyDetails[0]["SimilarCompany2"]}</div> */}
                                <div className='brand_box'>
                                    <div className="d-fldex justify-content-center">
                                    <div style={{fontFamily: 'DM Sans', fontWeight: 500, fontSize: '14px', marginTop: '8%', textAlign: 'center'}}>industry average</div>
                                        <div style={{textAlign: 'center'}}><AiFillCaretDown style={{}}/></div>
                                        <div class="horizontalline2" style={{width: `${companyDetails[0]["comp2SliderLength"]}px` }}></div>
                                        <div class="verticalline2"></div> 
                                        <img src="https://github.com/sophiasharifi/monestco/blob/main/images/slider%20backgroud.png?raw=true" className="brand_logo"/>
                                    </div>
                                    <div className="brand_inside_text ml-10perc">
                                        <span>{Math.round(companyDetails[0]["company2TotalScore"], 2)}</span>
                                        <span>/100</span>
                                    </div>
                                </div>
                            </div>                        
                            <div>
                                <Link className = 'Similar-Link' to = {'/companies/'+ companyDetails[0]["SimilarCompany3"]}>{companyDetails[0]["SimilarCompany3"]}</Link> 
                                {/* <div>{companyDetails[0]["SimilarCompany3"]}</div> */}
                                <div className='brand_box'>
                                <div className="d-fldex justify-content-center">
                                <div style={{fontFamily: 'DM Sans', fontWeight: 500, fontSize: '14px', marginTop: '8%', textAlign: 'center'}}>industry average</div>
                                    <div style={{textAlign: 'center'}}><AiFillCaretDown style={{}}/></div>
                                    <div class="horizontalline2" style={{width: `${companyDetails[0]["comp3SliderLength"]}px` }}></div>
                                    <div class="verticalline2"></div> 
                                    <img src="https://github.com/sophiasharifi/monestco/blob/main/images/slider%20backgroud.png?raw=true" className="brand_logo"/>
                                </div>
                                    <div className="brand_inside_text ml-10perc">
                                        <span>{Math.round(companyDetails[0]["company3TotalScore"], 2)}</span>
                                        <span>/100</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link className = 'Similar-Link' to = {'/companies/'+ companyDetails[0]["SimilarCompany4"]}>{companyDetails[0]["SimilarCompany4"]}</Link> 
                                {/* <div>{companyDetails[0]["SimilarCompany4"]}</div> */}
                                <div className='brand_box'>
                                    <div className="d-fldex justify-content-center"> 
                                    <div style={{fontFamily: 'DM Sans', fontWeight: 500, fontSize: '14px', marginTop: '8%', textAlign: 'center'}}>industry average</div>
                                        <div style={{textAlign: 'center'}}><AiFillCaretDown style={{}}/></div>
                                        <div class="horizontalline2" style={{width: `${companyDetails[0]["comp4SliderLength"]}px` }}></div>
                                        <div class="verticalline2"></div> 
                                        <img src="https://github.com/sophiasharifi/monestco/blob/main/images/slider%20backgroud.png?raw=true" className="brand_logo"/>
                                    </div>
                                    <div className="brand_inside_text ml-10perc">
                                        <span>{Math.round(companyDetails[0]["company4TotalScore"], 2)}</span>
                                        <span>/100</span>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
            </div>
            </Grid>
        </Grid>
    </div>
    );
    }
// }

export default Company
