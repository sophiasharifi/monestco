import React from "react";
import "../styles/Comparison.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import companies from "../data/companies.json";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

var filterBy = ["Clothing", "Sportswear", "Shoes", "All"];

class CompareSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unisex: false,
      women: false,
      sportswear: false,
      shoes: false,
      luxury: false,
      all: false,
      foundCompanies: [],
      changehandled: false,
    };
    this.toggleClassUnisex = this.toggleClassUnisex.bind(this);
    this.toggleClassWomen = this.toggleClassWomen.bind(this);
    this.toggleClassSportswear = this.toggleClassSportswear.bind(this);
    this.toggleClassShoes = this.toggleClassShoes.bind(this);
    this.toggleClassLuxury = this.toggleClassLuxury.bind(this);
    this.toggleClassAll = this.toggleClassAll.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleClassUnisex() {
    const currentState = this.state.unisex;
    this.setState({
      unisex: !currentState,
      women: false,
      sportswear: false,
      shoes: false,
      luxury: false,
      all: false,
    });
    const unisexCompanies = [];
    companies.companies.map((company) => {
      console.log(company.name);
      if (company.category === "Unisex") {
        unisexCompanies.push(company.name);
      }
    });
    console.log("unisex companies->");
    console.log(unisexCompanies);
    this.setState({ foundCompanies: unisexCompanies });
    // this.renderCompanies(foundCompanies)
  }
  toggleClassWomen() {
    const currentState = this.state.women;
    this.setState({
      women: !currentState,
      unisex: false,
      sportswear: false,
      shoes: false,
      luxury: false,
      all: false,
    });
    const womenCompanies = [];
    companies.companies.map((company) => {
      if (company.category === "Women") {
        womenCompanies.push(company.name);
      }
    });
    this.setState({ foundCompanies: womenCompanies });
  }
  toggleClassSportswear() {
    const currentState = this.state.sportswear;
    this.setState({
      sportswear: !currentState,
      unisex: false,
      women: false,
      shoes: false,
      luxury: false,
      all: false,
    });
    const sportCompanies = [];
    companies.companies.map((company) => {
      if (company.category === "Sportswear") {
        sportCompanies.push(company.name);
      }
    });
    this.setState({ foundCompanies: sportCompanies });
  }
  toggleClassShoes() {
    const currentState = this.state.shoes;
    this.setState({
      shoes: !currentState,
      unisex: false,
      women: false,
      sportswear: false,
      luxury: false,
      all: false,
    });
    const shoeCompanies = [];
    companies.companies.map((company) => {
      if (company.category === "Shoes") {
        shoeCompanies.push(company.name);
      }
    });
    this.setState({ foundCompanies: shoeCompanies });
  }
  toggleClassLuxury() {
    const currentState = this.state.luxury;
    this.setState({
      luxury: !currentState,
      unisex: false,
      women: false,
      sportswear: false,
      shoes: false,
      all: false,
    });
    const luxuryCompanies = [];
    companies.companies.map((company) => {
      if (company.category === "Luxury") {
        luxuryCompanies.push(company.name);
      }
    });
    this.setState({ foundCompanies: luxuryCompanies });
  }
  toggleClassAll() {
    const currentState = this.state.all;
    this.setState({
      all: !currentState,
      unisex: false,
      women: false,
      sportswear: false,
      shoes: false,
      luxury: false,
    });
    const allCompanies = [];
    companies.companies.map((company) => {
      allCompanies.push(company.name);
    });
    this.setState({ foundCompanies: allCompanies });
  }

  componentDidMount() {
    const allCompanies = [];
    companies.companies.map((company) => {
      allCompanies.push(company.name);
    });
    this.setState({
      all: true,
      foundCompanies: allCompanies,
    });
  }

  handleChange() {
    console.log("handlechange");
    var search = document.getElementById("categorysearch").value.toLowerCase();
    console.log("Search first letter");
    console.log(search.charAt(0));
    if (search.charAt(0) == "") {
      return null;
    }
    const comps = this.mapCompanies(companies);
    const foundCompanies = comps.filter((comp) => {
      return comp.toLowerCase().startsWith(search);
    });
    this.setState({
      foundCompanies: foundCompanies,
      changehandled: true,
    });
  }

  mapCompanies = (companies) => {
    console.log("mapcompanies");
    return companies.companies.map((company) => {
      return company.name;
    });
  };

  renderCompanies = (companies) => {
    return companies.map((company, i) => {
      return (
        <CSSTransition timeout={300}>
          <div
            key={i}
            className={this.state.changehandled ? "rendercompanies" : null}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "#26385A",
                fontWeight: "500",
                fontSize: "18px",
              }}
              to={"/companies/" + company}
            >
              {company}
            </Link>
          </div>
        </CSSTransition>
      );
    });
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          style={{
            margin: "0 0 20px 0",
            fontSize: "18px",
            lineHeight: "34px",
            color: "#3D3E3F",
          }}
        >
          Filter by:
        </p>
        <div
          style={{ display: "flex", flexWrap: "wrap", marginBottom: "10px" }}
        >
          <span
            id="filterbutton"
            className={this.state.unisex ? "categoryfocus" : null}
            onClick={this.toggleClassUnisex}
          >
            Unisex
          </span>
          <span
            id="filterbutton1"
            className={this.state.women ? "categoryfocus" : null}
            onClick={this.toggleClassWomen}
          >
            Women
          </span>
          <span
            id="filterbutton2"
            className={this.state.sportswear ? "categoryfocus" : null}
            onClick={this.toggleClassSportswear}
          >
            Sportswear
          </span>
          <div style={{ marginTop: "10%" }}></div>
          <span
            id="filterbutton3"
            className={this.state.shoes ? "categoryfocus" : null}
            onClick={this.toggleClassShoes}
          >
            Shoes & Accessories
          </span>
          <span
            id="filterbutton4"
            className={this.state.luxury ? "categoryfocus" : null}
            style={{ backgroundColor: "#F2F2F2", color: "#BDBDBD" }}
            // onClick = {this.toggleClassLuxury}
          >
            Luxury
          </span>
          <span
            id="filterbutton5"
            className={this.state.all ? "categoryfocus" : null}
            onClick={this.toggleClassAll}
          >
            All
          </span>
        </div>
        <div className="horizontal-row" />
        {/* <hr style={{width: '100%'}}/> */}
        <div style={{ position: "relative" }}>
          <FontAwesomeIcon
            style={{
              position: "absolute",
              marginTop: "9px",
              marginLeft: "5px",
              color: "rgba(50, 50, 50, 0.5",
            }}
            icon={faSearch}
          />
          <input
            type="text"
            id="categorysearch"
            onChange={this.handleChange}
            placeholder="Search the brand"
            style={{
              width: "85%",
              height: "34px",
              border: "2px solid #BDBDBD",
            }}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          {this.renderCompanies(this.state.foundCompanies)}
        </div>
      </div>
    );
  }
}

export default CompareSearch;
