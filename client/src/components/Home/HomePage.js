import React, { useState, Fragment } from 'react';
import  MonestSketch from '../../assets/monest_sketch.jpg'
import  EducateImg from '../../assets/educate.png'
import  EmpowerImg from '../../assets/empower.png'
import '../../styles/HomePage.css';
import * as emailjs from "emailjs-com";
import WindowLogo from '../../assets/window.jpg';
import CareerImg from '../../assets/career.png';


function HomePage(){
    function sendEmail(e) {
        const btn = document.getElementById('button');

        document.getElementById('form')
        .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sent!';

        const serviceID = 'service_00bwmmz';
        const templateID = 'template_17sev0y';

        emailjs.sendForm(serviceID, templateID, this, 'user_43WxN5WcAiBEEo05BK73t');
        });
    }

    return(
        <Fragment>
            <div className = 'About-Us-Container'>
            <div className = 'About-Us'>
                    <div className = 'About-Us-Positioning'>
                    <h1>Monest provides consumers <br></br> 
                        with the information they <br></br>
                        need to make responsible <br></br>
                        purchasing decisions.</h1>         
                        <label for="fetched_email">Join our Chrome Extension waitlist!</label>               
                        <form id="form" onClick = {sendEmail}>
                            <div class="field" style={{display:'flex', alignItems:'center', flexWrap:'nowrap'}}>                                                                
                                <input type="text" name="fetched_email" id="fetched_email" placeholder="Your email address"></input>
                                <input type="submit" id="button" value="Sign Up" ></input>
                            </div>
                        </form>
                    </div>                
                    <div className="main_image-container">
                        <img className="main_image" src = {MonestSketch} alt = 'browser sketch'></img>
                    </div>
            </div>
            </div>

            <div className = 'Goals'>  
                <h1>Our Goal</h1>
            </div>
            <div className = 'Goal-Positioning'>
                <div className = 'Goal-Panel'>
                    <img src = {EducateImg} style={{width:'60px', height:'58px'}}></img>
                    <h1>Educate</h1>
                    <p>consumers on the social and environmental impacts of leading brands across a variety of industries. </p>
                </div>
                <div className = 'Goal-Panel'>
                    <img src = {EmpowerImg} style={{width:'60px', height:'53px', marginBottom:'5px'}}></img>
                    <h1>Empower</h1>
                    <p>consumers to vote with their dollars, and support brands with values that align to their own.</p>
                </div>
            </div>
                {/* sorry i got lazy with positioning => don't be a lazy, enjoy the work */}
                {/* <br></br><br></br><br></br><br></br><br></br> */}
            <div className = 'Video d-flex justify-content-center'>
                <div className="embed-responsive embed-responsive-21by9 Video-image">
                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/XByA4I7TP-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/XByA4I7TP-8" allowFullScreen></iframe>
                </div>
            </div>           

            <div className="sign_up_section-Container">
            <div className="sign_up_section">
                <div className="window_header_text">Make your purchases more purposeful</div>
                <div className = 'sign_up-form-container'>
                    <div className="main_image-container">
                        <img className="main_image" src = {WindowLogo} alt = 'browser sketch'></img>
                    </div>
                    <div className = 'Sign-Up-Positioning'>
                    {/* <h1 className='sign-up-text-web'>
                        We help empower you to hold corporations<br></br> 
                        to higher ethical standards.<br></br>
                        Understand and compare brands’ impact<br></br>
                        at a glance with Monest                        
                        </h1>  */}
                        <h1 className='sign-up-text-web'>
                        We help empower you to hold <br></br> 
                        corporations to higher ethical <br></br>
                        standards. Understand and  <br></br>
                        compare brands’ impact at a <br></br>
                        glance with Monest                    
                        </h1>         
                        {/* <h1 className='sign-up-text'>
                        We help empower you to hold <br></br> 
                        corporations to higher ethical <br></br>
                        standards. Understand and  <br></br>
                        compare brands’ impact at a <br></br>
                        glance with Monest                        
                        </h1> */}
                        <label for="fetched_email">Join our Chrome Extension waitlist!</label>               
                        <form id="form" onClick = {sendEmail}>
                            <div class="field" style={{display:'flex', alignItems:'center', flexWrap:'nowrap'}}>                                                                
                                <input type="text" name="fetched_email" id="fetched_email" placeholder="Your email address" ></input>
                                <input type="submit" id="button" value="Sign Up" ></input>
                            </div>
                        </form>
                    </div>            
                </div>
                {/* <div className="sign_up-container">
                    <div className="window_logo-container">
            <div className="body">
                <div className="embed-responsive embed-responsive-21by9" style={{width:600,height:400}}>
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
                </div>
                </div>
            </div>
            <div className="sign_up_section mt-5">
            <div className="body" style={{flexDirection:"column"}}>
                <div className="d-flex justify-content-center"><p className="window_header_text">Make your purchases more purposeful</p></div>
                <div className="row ">
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <img src={WindowLogo} className="window_logo"/>
                    </div>
                    <div className="sign_up-form-container">
                            <p className="text_window">We help empower you to hold<br/> corporations to higher ethical<br/> standards. Understand and <br/>compare brands’ impact at a <br/>glance with Monest
                            </p>
                            <label for="fetched_email">Join our Chrome Extension waitlist!</label>               
                            <form id="form" onClick = {sendEmail}>
                                <div class="field" style={{display:'flex', alignItems:'center', flexWrap:'nowrap'}}>                                                                
                                    <input type="text" name="fetched_email" id="fetched_email" placeholder="Your email address"></input>
                                    <input type="submit" id="button" value="Sign Up" ></input>
                                </div>
                            </form>
                            <p className="sign_up_text">Join our Chrome extension waitlist</p>
                            <form id="form" onClick = {sendEmail}>
                                <div class="field" style={{display:'flex', alignItems:'center', flexWrap:'nowrap'}}>                                                                
                                    <input type="text" name="fetched_email" id="fetched_email" placeholder="Your email address"></input>
                                    <input type="submit" id="button" value="Sign Up" ></input>
                                </div>
                            </form>
                            <div style={{display:'flex'}}>
                                <input type="email" placeholder='Your email address' className="input_sign_up" id="email"/>
                                <button type="submit" className="btn btn-primary sign_up_button">Sign Up</button>
                            </div>
                            <form className="form-inline">
                                <div className="form-group">
                                    <label for="email" className="sr-only">Email</label>
                                </div>
                            </form>
                    </div> 
                </div> */}
            </div>
            </div>
            <div className="Career-Container">
            <div className = "Career">
                <div className = "Career-Positioning">
                    {/*<img src = {CareerImg} style={{width:'350px', height:'250px', marginLeft:'40%'}}></img>*/}
                    <h1>We're hiring</h1>
                    <h2>Research Analysts!</h2>
                    {/* <br></br> */}
                    <img className="carrer_image-2" src = {CareerImg} alt = 'browser sketch'></img>
                    <div className="career-btn-container">
                        <p style={{whiteSpace:'nowrap', marginBottom:'0'}}>Are you interested in working with us?</p>
                        <input type="submit" id="button" value="Career" className="career-btn" ></input>
                    </div>
                </div>
                <img className="carrer_image" src = {CareerImg} alt = 'browser sketch'></img>
            </div>
            </div>
        </Fragment>
        )
}

export default HomePage;