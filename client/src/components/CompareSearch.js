import React from 'react'; 
import '../styles/Comparison.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import companies from '../data/companies.json';
import { CSSTransition } from 'react-transition-group';

var filterBy = [
    'Clothing', 'Sportswear', 'Shoes', 'All'
];

class CompareSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clothing: false,
            sportswear: false,
            shoes: false,
            all: false,
            foundCompanies: [],
            changehandled: false
        };  
        this.toggleClassClothing = this.toggleClassClothing.bind(this);
        this.toggleClassSportswear = this.toggleClassSportswear.bind(this);
        this.toggleClassShoes = this.toggleClassShoes.bind(this);
        this.toggleClassAll = this.toggleClassAll.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    toggleClassClothing() {
        const currentState = this.state.clothing;
        this.setState({clothing: !currentState});
    }
    toggleClassSportswear() {
        const currentState = this.state.sportswear;
        this.setState({sportswear: !currentState});
    }
    toggleClassShoes() {
        const currentState = this.state.shoes;
        this.setState({shoes: !currentState});
    }
    toggleClassAll() {
        const currentState = !this.state.all;
        this.setState({all: !currentState});
    }

    handleChange() {
        console.log("handlechange");
        var search = document.getElementById("categorysearch").value.toLowerCase();
        const comps = this.mapCompanies(companies);
        const foundCompanies = comps.filter(comp => {
            return comp.toLowerCase().match(search);
        })
        this.setState({ 
            foundCompanies: foundCompanies,
            changehandled: true
        });      
    }

    mapCompanies = (companies) => {
        console.log("mapcompanies");
        return companies.companies.map(company => {
            return company.name;
        })
    }

    renderCompanies = (companies) => {
        console.log("rendercompanies");
        return companies.map((company, i) => {
            return <CSSTransition timeout={300}>
                        <div key={i} className={this.state.changehandled ? 'rendercompanies' : null}>
                            {company}
                        </div>  
                    </CSSTransition>              
        })
    }

    render() {   
        return (
            <div style={{display:'flex', flexDirection:'column'}}>
                <p style={{margin: '0 0 20px 0', fontSize: '18px', lineHeight:'34px', color: '#3D3E3F'}}>Filter by:</p>
                <div style={{display:'flex', flexWrap:'wrap'}}>
                <span id="filterbutton"
                    className={this.state.clothing ? 'categoryfocus' : null}
                    onClick = {this.toggleClassClothing}
                >Clothing</span>
                <span id="filterbutton1"
                    className={this.state.sportswear ? 'categoryfocus' : null}
                    onClick = {this.toggleClassSportswear}
                >Sportswear</span>
                <div style={{marginTop: '10%'}}></div>
                <span id="filterbutton2"
                    className={this.state.shoes ? 'categoryfocus' : null}
                    onClick = {this.toggleClassShoes}
                >Shoes</span>
                <span id="filterbutton3"
                    className={this.state.all ? 'categoryfocus' : null}
                    onClick = {this.toggleClassAll}
                >All</span>
                </div>

                <hr style={{width: '100%', margin:'20px 0'}}/>
                <div style={{position:'relative'}}>
                <FontAwesomeIcon style={{position: "absolute", marginTop: '21px', marginLeft: '8px', color: 'rgba(50, 50, 50, 0.5'}} icon={faSearch} />
                <input type="text" id="categorysearch" onChange={this.handleChange} placeholder="Search the brand" style={{width: '85%', height: '23px', border:'2px solid #BDBDBD'}} />
                </div>
                <div style={{marginTop:'20px'}}>
                    {this.renderCompanies(this.state.foundCompanies)}
                </div>
            </div>
            )
        }
}

export default CompareSearch;
