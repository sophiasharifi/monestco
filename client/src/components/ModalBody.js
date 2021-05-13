import React, { useState } from "react";
import { Link } from 'react-router-dom';
import CancelIcon from "@material-ui/icons/Cancel";
import "../styles/ModalBody.css";

export default function ModalBody({ handleClose, i, title, summary, issueAdd, issueAddExp, respTake, respTakenExp, newsID, citID, author, cittitle, pubgroup, date, pages, url }) {
  const [showCitation, setShowCitation] = useState(false);

  return (
    <div className="model-body">
      <div className="model-body-content">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="model-title">
            {title[i]}
            <CancelIcon onClick={handleClose} className="model-close-icon" />
          </div>
          <div className="model-description">
            <div>
              {summary[i]}
              {newsID[i]}
            </div>        
            <div style={{ fontSize: "14px", marginTop: "1rem" }}>
              <span style={{ fontWeight: "700" }}>Issue Addressed?</span>
              {issueAdd[i] == 'Yes' && <span style={{ color: "#28a745", marginLeft: "5px" }}>{issueAdd[i]}</span> || issueAdd[i] == 'No' &&  <span style={{ color: "#E94921", marginLeft: "5px" }}>{respTake[i]}</span> || issueAdd[i] == 'Maybe' &&  <span style={{ color: "#F29A72", marginLeft: "5px" }}>{respTake[i]}</span>}
            </div>
            <div>
              {issueAddExp[i]}
            </div>
            <div style={{ fontSize: "14px", marginTop: "1rem" }}>
              <span style={{ fontWeight: "700" }}>Responsibility Taken?</span>
              {respTake[i] == 'Yes' && <span style={{ color: "#28a745", marginLeft: "5px" }}>{respTake[i]}</span> || respTake[i] == 'No' && <span style={{ color: "#E94921", marginLeft: "5px" }}>{respTake[i]}</span> || respTake[i] == 'Maybe' &&  <span style={{ color: "#F29A72", marginLeft: "5px" }}>{respTake[i]}</span>}
            </div>
            <div>
              {respTakenExp[i]}
            </div>
            <div
              className="Fun-Fact"
              style={{ width: "100%", fontWeight: "700" }}
            >
              Citation 
              <i
                onClick={() => setShowCitation(!showCitation)}
                style={{ borderColor: "#323232" }}
                className={`Fun-Fact-arrowdown ${showCitation ? "Fun-Fact-arrowdown-rotate" : ""}`}
              ></i>
            </div>
            {showCitation ? (
              citID.map((key, i) => {
                return <div>
                  {author[i] != null && author[i] + '  ' }
                  {cittitle[i] != null && cittitle[i] + '  '}
                   <em>{pubgroup[i]!= null && pubgroup[i] + '  '}</em>
                   {date[i] != null && date[i] + '  '}
                   {pages[i] != null && pages[i] + '  '}
                   <a href = {url[i]}>{url[i]}</a>
                   <br></br>
              </div>
              })
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
