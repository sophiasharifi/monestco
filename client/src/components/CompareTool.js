import React from 'react';
import '../styles/Comparison.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

class CompareTool extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            industrystandards: {},
            firstA: -1,
            firstA1: {},
            firstA2: {},
            firstA3: {},
            firstA4: {},
            firstB: -1,
            firstB1: {},
            firstB2: {},
            firstB3: {},
            firstB4: {},
            firstC: -1,
            firstC1: {},
            firstC2: {},
            firstC3: {},
            firstC4: {},
            firstD: -1,
            firstD1: {},
            firstD2: {},
            firstD3: {},
            secondA: -1,
            secondA1: {},
            secondA2: {},
            secondA3: {},
            secondA4: {},
            secondB: -1,
            secondB1: {},
            secondB2: {},
            secondB3: {},
            secondB4: {},
            secondC: -1,
            secondC1: {},
            secondC2: {},
            secondC3: {},
            secondC4: {},
            secondD: -1,
            secondD1: {},
            secondD2: {},
            secondD3: {},
            thirdA: -1,
            thirdA1: {},
            thirdA2: {},
            thirdA3: {},
            thirdA4: {},
            thirdB: -1,
            thirdB1: {},
            thirdB2: {},
            thirdB3: {},
            thirdB4: {},
            thirdC: -1,
            thirdC1: {},
            thirdC2: {},
            thirdC3: {},
            thirdC4: {},
            thirdD: -1,
            thirdD1: {},
            thirdD2: {},
            thirdD3: {},
            firstcomp: '',
            secondcomp: '',
            thirdcomp: '',
            allcompanies: [],
            returnedCompanies1: [],
            returnedCompanies2: [],
            returnedCompanies3: [],
            a_show: false,
            b_show: false,
            c_show: false,
            d_show: false,
            a1_show: false,
            a2_show: false,
            a3_show: false,
            a4_show: false,
            b1_show: false,
            b2_show: false,
            b3_show: false,
            b4_show: false,
            c1_show: false,
            c2_show: false,
            c3_show: false,
            c4_show: false,
            a11_flip: false,
            a12_flip: false,
            a21_flip: false,
            a22_flip: false,
            a23_flip: false,
            a31_flip: false,
            a32_flip: false,
            a33_flip: false,
            a41_flip: false,
            a42_flip: false,
            b11_flip: false,
            b12_flip: false,
            b13_flip: false,
            b21_flip: false,
            b22_flip: false,
            b23_flip: false,
            b31_flip: false,
            b32_flip: false,
            b33_flip: false,
            b34_flip: false,
            b35_flip: false,
            b41_flip: false,
            b42_flip: false,
            b43_flip: false,
            b44_flip: false,
            b45_flip: false,
            c11_flip: false,
            c12_flip: false,
            c13_flip: false,
            c14_flip: false,
            c21_flip: false,
            c22_flip: false,
            c23_flip: false,
            c24_flip: false,
            c31_flip: false,
            c32_flip: false,
            c33_flip: false,
            c34_flip: false
        }

        this.enterFirst = this.enterFirst.bind(this);
        this.enterSecond = this.enterSecond.bind(this);
        this.enterThird = this.enterThird.bind(this);
        this.returnIndustryStandards = this.returnIndustryStandards.bind(this);
        this.enterCompanies = this.enterCompanies.bind(this);
        this.renderCompanies = this.renderCompanies.bind(this);
        this.renderCompanies = this.renderCompanies.bind(this);
        this.changeA = this.changeA.bind(this);
        this.changeB = this.changeB.bind(this);
        this.changeC = this.changeC.bind(this);
        this.changeD = this.changeD.bind(this);
        this.changeA1 = this.changeA1.bind(this);
        this.changeA2 = this.changeA2.bind(this);
        this.changeA3 = this.changeA3.bind(this);
        this.changeA4 = this.changeA4.bind(this);
        this.changeB1 = this.changeB1.bind(this);
        this.changeB2 = this.changeB2.bind(this);
        this.changeB3 = this.changeB3.bind(this);
        this.changeB4 = this.changeB4.bind(this);
        this.changeC1 = this.changeC1.bind(this);
        this.changeC2 = this.changeC2.bind(this);
        this.changeC3 = this.changeC3.bind(this);
        this.changeC4 = this.changeC4.bind(this);
        this.A11flip = this.A11flip.bind(this);
        this.A12flip = this.A12flip.bind(this);
        this.A21flip = this.A21flip.bind(this);
        this.A22flip = this.A22flip.bind(this);
        this.A23flip = this.A23flip.bind(this);
        this.A31flip = this.A31flip.bind(this);
        this.A32flip = this.A32flip.bind(this);
        this.A33flip = this.A33flip.bind(this);
        this.A41flip = this.A41flip.bind(this);
        this.A42flip = this.A42flip.bind(this);
        this.B11flip = this.B11flip.bind(this);
        this.B12flip = this.B12flip.bind(this);
        this.B13flip = this.B13flip.bind(this);
        this.B21flip = this.B21flip.bind(this);
        this.B22flip = this.B22flip.bind(this);
        this.B23flip = this.B23flip.bind(this);
        this.B31flip = this.B31flip.bind(this);
        this.B32flip = this.B32flip.bind(this);
        this.B33flip = this.B33flip.bind(this);
        this.B34flip = this.B34flip.bind(this);
        this.B35flip = this.B35flip.bind(this);
        this.B41flip = this.B41flip.bind(this);
        this.B42flip = this.B42flip.bind(this);
        this.B43flip = this.B43flip.bind(this);
        this.B44flip = this.B44flip.bind(this);
        this.B45flip = this.B45flip.bind(this);
        this.C11flip = this.C11flip.bind(this);
        this.C12flip = this.C12flip.bind(this);
        this.C13flip = this.C13flip.bind(this);
        this.C14flip = this.C14flip.bind(this);
        this.C21flip = this.C21flip.bind(this);
        this.C22flip = this.C22flip.bind(this);
        this.C23flip = this.C23flip.bind(this);
        this.C24flip = this.C24flip.bind(this);
        this.C31flip = this.C31flip.bind(this);
        this.C32flip = this.C32flip.bind(this);
        this.C33flip = this.C33flip.bind(this);
        this.C34flip = this.C34flip.bind(this);
    }

    mapCompanies = (companies) => {
        return companies.map(company => {
            return company;
        })
    }

    async returnIndustryStandards(company, condition) {
        await axios.post('/companydetailsA', {}, {
               params: company
            }).then(resp => {

                var A1 = {};
                A1['A1'] = resp.data.rows[0]['A1'];
                A1['A11_text'] = resp.data.rows[0]['A11_text'];
                A1['A11_score'] = resp.data.rows[0]['A11_score'];
                A1['A12_text'] = resp.data.rows[0]['A12_text'];
                A1['A12_score'] = resp.data.rows[0]['A12_score'];
                
                var A2 = {};
                A2['A2'] = resp.data.rows[0]['A2'];
                A2['A21_score'] = resp.data.rows[0]['A21_score'];
                A2['A21_text'] = resp.data.rows[0]['A22_text'];
                A2['A22_score'] = resp.data.rows[0]['A21_score'];
                A2['A22_text'] = resp.data.rows[0]['A21_text'];
                A2['A23_score'] = resp.data.rows[0]['A23_score'];
                A2['A23_text'] = resp.data.rows[0]['A23_text'];

                var A3 = {};
                A3['A3'] = resp.data.rows[0]['A3'];
                A3['A31_score'] = resp.data.rows[0]['A31_score'];
                A3['A31_text'] = resp.data.rows[0]['A31_text'];
                A3['A32_score'] = resp.data.rows[0]['A32_score'];
                A3['A32_text'] = resp.data.rows[0]['A32_text'];
                A3['A33_score'] = resp.data.rows[0]['A33_score'];
                A3['A33_text'] = resp.data.rows[0]['A33_text'];

                var A4 = {};
                A4['A4'] = resp.data.rows[0]['A4'];
                A4['A41_score'] = resp.data.rows[0]['A41_score'];
                A4['A41_text'] = resp.data.rows[0]['A41_text'];
                A4['A42_score'] = resp.data.rows[0]['A42_score'];
                A4['A42_text'] = resp.data.rows[0]['A42_text'];


                if (condition == 1) this.setState({
                    firstA: resp.data.rows[0]['A'],
                    firstA1: A1,
                    firstA2: A2,
                    firstA3: A3,
                    firstA4: A4         
                });
                if (condition == 2) this.setState({
                    secondA: resp.data.rows[0]['A'],
                    secondA1: A1,
                    secondA2: A2,
                    secondA3: A3,
                    secondA4: A4
                });
                if (condition == 3) this.setState({
                    thirdA: resp.data.rows[0]['A'],
                    thirdA1: A1,
                    thirdA2: A2,
                    thirdA3: A3,
                    thirdA4: A4
                });
            })
            .catch(error => {
                console.log(error);
            })

        await axios.post('/companydetailsB', {}, {
               params: company
            }).then(resp => {
                
                var B1 = {};
                B1['B1'] = resp.data.rows[0]['B1'];
                B1['B11_text'] = resp.data.rows[0]['B11_text'];
                B1['B11_score'] = resp.data.rows[0]['B11_score'];
                B1['B12_text'] = resp.data.rows[0]['B12_text'];
                B1['B12_score'] = resp.data.rows[0]['B12_score'];
                B1['B13_text'] = resp.data.rows[0]['B13_text'];
                B1['B13_score'] = resp.data.rows[0]['B13_score'];
                
                var B2 = {};
                B2['B2'] = resp.data.rows[0]['B2'];
                B2['B21_score'] = resp.data.rows[0]['B21_score'];
                B2['B21_text'] = resp.data.rows[0]['B22_text'];
                B2['B22_score'] = resp.data.rows[0]['B21_score'];
                B2['B22_text'] = resp.data.rows[0]['B21_text'];
                B2['B23_score'] = resp.data.rows[0]['B23_score'];
                B2['B23_text'] = resp.data.rows[0]['B23_text'];

                var B3 = {};
                B3['B3'] = resp.data.rows[0]['B3'];
                B3['B31_score'] = resp.data.rows[0]['B31_score'];
                B3['B31_text'] = resp.data.rows[0]['B31_text'];
                B3['B32_score'] = resp.data.rows[0]['B32_score'];
                B3['B32_text'] = resp.data.rows[0]['B32_text'];
                B3['B33_score'] = resp.data.rows[0]['B33_score'];
                B3['B33_text'] = resp.data.rows[0]['B33_text'];
                B3['B34_score'] = resp.data.rows[0]['B34_score'];
                B3['B34_text'] = resp.data.rows[0]['B34_text'];
                B3['B35_score'] = resp.data.rows[0]['B35_score'];
                B3['B35_text'] = resp.data.rows[0]['B35_text'];

                var B4 = {};
                B4['B4'] = resp.data.rows[0]['B4'];
                B4['B41_score'] = resp.data.rows[0]['B41_score'];
                B4['B41_text'] = resp.data.rows[0]['B41_text'];
                B4['B42_score'] = resp.data.rows[0]['B42_score'];
                B4['B42_text'] = resp.data.rows[0]['B42_text'];
                B4['B43_score'] = resp.data.rows[0]['B43_score'];
                B4['B43_text'] = resp.data.rows[0]['B43_text'];
                B4['B44_score'] = resp.data.rows[0]['B44_score'];
                B4['B44_text'] = resp.data.rows[0]['B44_text'];
                B4['B45_score'] = resp.data.rows[0]['B45_score'];
                B4['B45_text'] = resp.data.rows[0]['B45_text'];

                if (condition == 1) this.setState({
                    firstB: resp.data.rows[0]['B'],
                    firstB1: B1,
                    firstB2: B2,
                    firstB3: B3,
                    firstB4: B4
                });
                if (condition == 2) this.setState({
                    secondB: resp.data.rows[0]['B'],
                    secondB1: B1,
                    secondB2: B2,
                    secondB3: B3,
                    secondB4: B4
                });
                if (condition == 3) this.setState({
                    thirdB: resp.data.rows[0]['B'],
                    thirdB1: B1,
                    thirdB2: B2,
                    thirdB3: B3,
                    thirdB4: B4
                });
            })
            .catch(error => {
                console.log(error);
            })

        await axios.post('/companydetailsC', {}, {
               params: company
            }).then(resp => {

                var C1 = {};
                C1['C1'] = resp.data.rows[0]['C1'];
                C1['C11_text'] = resp.data.rows[0]['C11_text'];
                C1['C11_score'] = resp.data.rows[0]['C11_score'];
                C1['C12_text'] = resp.data.rows[0]['C12_text'];
                C1['C12_score'] = resp.data.rows[0]['C12_score'];
                C1['C13_text'] = resp.data.rows[0]['C13_text'];
                C1['C13_score'] = resp.data.rows[0]['C13_score'];
                C1['C14_text'] = resp.data.rows[0]['C14_text'];
                C1['C14_score'] = resp.data.rows[0]['C14_score'];

                var C2 = {};
                C2['C2'] = resp.data.rows[0]['C2'];
                C2['C2_score'] = resp.data.rows[0]['C2_score'];
                C2['C21_text'] = resp.data.rows[0]['C21_text'];
                C2['C21_score'] = resp.data.rows[0]['C21_score'];
                C2['C22_text'] = resp.data.rows[0]['C22_text'];
                C2['C22_score'] = resp.data.rows[0]['C22_score'];
                C2['C23_text'] = resp.data.rows[0]['C23_text'];
                C2['C23_score'] = resp.data.rows[0]['C23_score'];
                C2['C24_text'] = resp.data.rows[0]['C24_text'];
                C2['C24_score'] = resp.data.rows[0]['C24_score'];

                var C3 = {};
                C3['C3'] = resp.data.rows[0]['C3'];
                C3['C3_score'] = resp.data.rows[0]['C3_score'];
                C3['C31_text'] = resp.data.rows[0]['C31_text'];
                C3['C31_score'] = resp.data.rows[0]['C31_score'];
                C3['C32_text'] = resp.data.rows[0]['C32_text'];
                C3['C32_score'] = resp.data.rows[0]['C32_score'];
                C3['C33_text'] = resp.data.rows[0]['C33_text'];
                C3['C33_score'] = resp.data.rows[0]['C33_score'];
                C3['C34_text'] = resp.data.rows[0]['C34_text'];
                C3['C34_score'] = resp.data.rows[0]['C34_score'];

                var C4 = {};
                C4['C4'] = resp.data.rows[0]['C4'];
                C4['C4_score'] = resp.data.rows[0]['C4_score'];
                C4['C41_text'] = resp.data.rows[0]['C41_text'];
                C4['C41_score'] = resp.data.rows[0]['C41_score'];
                C4['C42_text'] = resp.data.rows[0]['C42_text'];
                C4['C42_score'] = resp.data.rows[0]['C42_score'];
                C4['C43_text'] = resp.data.rows[0]['C43_text'];
                C4['C43_score'] = resp.data.rows[0]['C43_score'];
                C4['C44_text'] = resp.data.rows[0]['C44_text'];
                C4['C44_score'] = resp.data.rows[0]['C44_score'];

                if (condition == 1) this.setState({
                    firstC: resp.data.rows[0]['C'],
                    firstC1: C1,
                    firstC2: C2,
                    firstC3: C3,
                    firstC4: C4
                });
                if (condition == 2) this.setState({
                    secondC: resp.data.rows[0]['C'],
                    secondC1: C1,
                    secondC2: C2,
                    secondC3: C3,
                    secondC4: C4
                });
                if (condition == 3) this.setState({
                    thirdC: resp.data.rows[0]['C'],
                    thirdC1: C1,
                    thirdC2: C2,
                    thirdC3: C3,
                    thirdC4: C4
                });
            })
            .catch(error => {
                console.log(error);
            })

        await axios.post('/companydetailsD', {}, {
               params: company
            }).then(resp => {

                var D1 = {};
                D1['D1'] = resp.data.rows[0]['D1'];
                D1['D11_text'] = resp.data.rows[0]['D11_text'];
                D1['D11_score'] = resp.data.rows[0]['D11_score'];
                D1['D12_text'] = resp.data.rows[0]['D12_text'];

                var D2 = {};
                D2['D2'] = resp.data.rows[0]['D2'];
                D2['D2_score'] = resp.data.rows[0]['D2_score'];
                D2['D21_text'] = resp.data.rows[0]['D21_text'];
                D2['D21_score'] = resp.data.rows[0]['D21_score'];
                D2['D22_text'] = resp.data.rows[0]['D22_text'];
                D2['D23_score'] = resp.data.rows[0]['D23_score'];
                D2['D23_text'] = resp.data.rows[0]['D23_text'];

                var D3 = {};
                D3['D3'] = resp.data.rows[0]['D3'];
                D3['D3_score'] = resp.data.rows[0]['D3_score'];
                D3['D31_text'] = resp.data.rows[0]['D31_text'];
                D3['D31_score'] = resp.data.rows[0]['D31_score'];
                D3['D32_text'] = resp.data.rows[0]['D32_text'];
                D3['D33_score'] = resp.data.rows[0]['D33_score'];
                D3['D33_text'] = resp.data.rows[0]['D33_text'];
                D3['D34_score'] = resp.data.rows[0]['D34_score'];
                D3['D34_text'] = resp.data.rows[0]['D34_text'];
                D3['D35_score'] = resp.data.rows[0]['D35_score'];
                D3['D35_text'] = resp.data.rows[0]['D35_text'];

                if (condition == 1) this.setState({
                    firstD: resp.data.rows[0]['D'],
                    firstD1: D1,
                    firstD2: D2,
                    firstD3: D3
                });
                if (condition == 2) this.setState({
                    secondD: resp.data.rows[0]['D'],
                    secondD1: D1,
                    secondD2: D2,
                    secondD3: D3
                });
                if (condition == 3) this.setState({
                    thirdD: resp.data.rows[0]['D'],
                    thirdD1: D1,
                    thirdD2: D2,
                    thirdD3: D3
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    enterCompanies(comp) {
        const companies = this.mapCompanies(this.state.allcompanies);
        return companies.filter(company => {
            return company.toLowerCase().match(comp.toLowerCase());
        })
    }

    async enterFirst(event) {
        this.setState({firstcomp: event.target.value});
        const returnedCompanies = this.enterCompanies(this.state.firstcomp);
        await this.setState({returnedCompanies1: returnedCompanies});
    }

    async enterSecond(event) {
        this.setState({secondcomp : event.target.value});
        const returnedCompanies = this.enterCompanies(this.state.secondcomp);
        await this.setState({returnedCompanies2: returnedCompanies});
    }

    async enterThird(event) {
        this.setState({thirdcomp : event.target.value});
        const returnedCompanies = this.enterCompanies(this.state.thirdcomp);
        await this.setState({returnedCompanies3: returnedCompanies});
    }

    changeA() {
        const opp = !this.state.a_show;
        this.setState({a_show: opp});
    }

    changeB() {
        const opp = !this.state.b_show;
        this.setState({b_show: opp});
    }

    changeC() {
        const opp = !this.state.c_show;
        this.setState({c_show: opp});
    }

    changeD() {
        const opp = !this.state.d_show;
        this.setState({d_show: opp});
    }

    changeA1() {
        const opp = !this.state.a1_show;
        this.setState({a1_show: opp});
    }

    changeA2() {
        const opp = !this.state.a2_show;
        this.setState({a2_show: opp});
    }

    changeA3() {
        const opp = !this.state.a3_show;
        this.setState({a3_show: opp});
    }

    changeA4() {
        const opp = !this.state.a4_show;
        this.setState({a4_show: opp});
    }

    changeB1() {
        const opp = !this.state.b1_show;
        this.setState({b1_show: opp});
    }

    changeB2() {
        const opp = !this.state.b2_show;
        this.setState({b2_show: opp});
    }

    changeB3() {
        const opp = !this.state.b3_show;
        this.setState({b3_show: opp});
    }

    changeB4() {
        const opp = !this.state.b4_show;
        this.setState({b4_show: opp});
    }

    changeC1() {
        const opp = !this.state.c1_show;
        this.setState({c1_show: opp});
    }

    changeC2() {
        const opp = !this.state.c2_show;
        this.setState({c2_show: opp});
    }

    changeC3() {
        const opp = !this.state.c3_show;
        this.setState({c3_show: opp});
    }

    changeC4() {
        const opp = !this.state.c4_show;
        this.setState({c4_show: opp});
    }

    componentDidMount() {
        axios.get('/allcompanies').then((resp) => {
            const allcompanies = [];
            for (var i = 0; i < resp.data.rows.length; i++) {
                allcompanies.push(resp.data.rows[i].name);
            }
            this.setState({allcompanies: allcompanies});
        })

        axios.get('/industry').then((resp) => {
            const industrystandards = {};
            for (const standard in resp.data.rows[0]) {
                industrystandards[standard] = resp.data.rows[0][standard];
            }
            this.setState({industrystandards: industrystandards});
        })
    }

    compareStandards(industrystandard, companystandard) {
        if (companystandard == -1 || companystandard == undefined) return "graysquare";
        if (companystandard == industrystandard) return "yellowsquare";
        if (companystandard > industrystandard) return "greensquare";
        else return "orangesquare";
    }

    compareNestedStandards(industrystandard, companystandard) {
        if (companystandard == -1 || companystandard == undefined) return "graysquare";
        if (companystandard == industrystandard) return "yellowsquare1";
        if (companystandard > industrystandard) return "greensquare1";
        else return "orangesquare1";
    }

    compareNestedTwoStandards(industrystandard, companystandard) {
        if (companystandard == -1 || companystandard == undefined) return "graysquare";
        if (companystandard == industrystandard) return "yellowsquare2";
        if (companystandard > industrystandard) return "greensquare2";
        else return "orangesquare2";
    }

    renderCompanies(returnedcompanies, condition) {
        if (returnedcompanies.length != 0) {
            return (
                <div className='returnedcompanies'>
                {returnedcompanies.map((company, i) => {
                    return <div key={i} style={{cursor: "pointer"}} onClick={() => this.returnIndustryStandards(company, condition)}>{company}</div>
                })}
                </div>
            )
        }
    }

    renderNestedGrid = (letter, field) => {
        return <div className={'square1 ' + this.compareNestedStandards(this.state.industrystandards[field], letter[field])}>
            {letter[field] != undefined && <div style={{marginTop: '8%', fontWeight: 500}}>{letter[field]} / 100</div> }
        </div>
    }

    A11flip() {
        const opp = !this.state.a11_flip;
        this.setState({
            a11_flip: opp
        })
    }

    A12flip() {
        const opp = !this.state.a12_flip;
        this.setState({
            a12_flip: opp
        })
    }

    A21flip() {
        const opp = !this.state.a21_flip;
        this.setState({
            a21_flip: opp
        })
    }

    A22flip() {
        const opp = !this.state.a22_flip;
        this.setState({
            a22_flip: opp
        })
    }

    A23flip() {
        const opp = !this.state.a23_flip;
        this.setState({
            a23_flip: opp
        })
    }

    A31flip() {
        const opp = !this.state.a31_flip;
        this.setState({
            a31_flip: opp
        })
    }

    A32flip() {
        const opp = !this.state.a32_flip;
        this.setState({
            a32_flip: opp
        })
    }

    A33flip() {
        const opp = !this.state.a33_flip;
        this.setState({
            a33_flip: opp
        })
    }

    A41flip() {
        const opp = !this.state.a41_flip;
        this.setState({
            a41_flip: opp
        })
    }

    A42flip() {
        const opp = !this.state.a42_flip;
        this.setState({
            a42_flip: opp
        })
    }

    B11flip() {
        const opp = !this.state.b11_flip;
        this.setState({
            b11_flip: opp
        })
    }

    B12flip() {
        const opp = !this.state.b12_flip;
        this.setState({
            b12_flip: opp
        })
    }

    B13flip() {
        const opp = !this.state.b13_flip;
        this.setState({
            b13_flip: opp
        })
    }

    B21flip() {
        const opp = !this.state.b21_flip;
        this.setState({
            b21_flip: opp
        })
    }

    B22flip() {
        const opp = !this.state.b22_flip;
        this.setState({
            b22_flip: opp
        })
    }

    B23flip() {
        const opp = !this.state.b23_flip;
        this.setState({
            b23_flip: opp
        })
    }

    B31flip() {
        const opp = !this.state.b31_flip;
        this.setState({
            b31_flip: opp
        })
    }

    B32flip() {
        const opp = !this.state.b32_flip;
        this.setState({
            b32_flip: opp
        })
    }

    B33flip() {
        const opp = !this.state.b33_flip;
        this.setState({
            b33_flip: opp
        })
    }

    B34flip() {
        const opp = !this.state.b34_flip;
        this.setState({
            b34_flip: opp
        })
    }

    B35flip() {
        const opp = !this.state.b35_flip;
        this.setState({
            b35_flip: opp
        })
    }

    B41flip() {
        const opp = !this.state.b41_flip;
        this.setState({
            b41_flip: opp
        })
    }

    B42flip() {
        const opp = !this.state.b42_flip;
        this.setState({
            b42_flip: opp
        })
    }

    B43flip() {
        const opp = !this.state.b43_flip;
        this.setState({
            b43_flip: opp
        })
    }

    B44flip() {
        const opp = !this.state.b44_flip;
        this.setState({
            b44_flip: opp
        })
    }

    B45flip() {
        const opp = !this.state.b45_flip;
        this.setState({
            b45_flip: opp
        })
    }

    C11flip() {
        const opp = !this.state.c11_flip;
        this.setState({
            c11_flip: opp
        })
    }

    C12flip() {
        const opp = !this.state.c12_flip;
        this.setState({
            c12_flip: opp
        })
    }

    C13flip() {
        const opp = !this.state.c13_flip;
        this.setState({
            c13_flip: opp
        })
    }

    C14flip() {
        const opp = !this.state.c14_flip;
        this.setState({
            c14_flip: opp
        })
    }

    C21flip() {
        const opp = !this.state.c21_flip;
        this.setState({
            c21_flip: opp
        })
    }

    C22flip() {
        const opp = !this.state.c22_flip;
        this.setState({
            c22_flip: opp
        })
    }

    C23flip() {
        const opp = !this.state.c23_flip;
        this.setState({
            c23_flip: opp
        })
    }

    C24flip() {
        const opp = !this.state.c24_flip;
        this.setState({
            c24_flip: opp
        })
    }

    C31flip() {
        const opp = !this.state.c31_flip;
        this.setState({
            c31_flip: opp
        })
    }

    C32flip() {
        const opp = !this.state.c32_flip;
        this.setState({
            c32_flip: opp
        })
    }

    C33flip() {
        const opp = !this.state.c33_flip;
        this.setState({
            c33_flip: opp
        })
    }

    C34flip() {
        const opp = !this.state.c34_flip;
        this.setState({
            c34_flip: opp
        })
    }

    C41flip() {
        const opp = !this.state.c41_flip;
        this.setState({
            c41_flip: opp
        })
    }

    C42flip() {
        const opp = !this.state.c42_flip;
        this.setState({
            c42_flip: opp
        })
    }

    C43flip() {
        const opp = !this.state.c43_flip;
        this.setState({
            c43_flip: opp
        })
    }

    C44flip() {
        const opp = !this.state.c44_flip;
        this.setState({
            c44_flip: opp
        })
    }

    renderNestedTwoGrid = (letter, fieldscore, fieldtext, flipstate, flipfunc) => {
        return <div onClick={flipfunc} className={'square2 ' + this.compareNestedTwoStandards(this.state.industrystandards[fieldscore], letter[fieldscore])}>
            {flipstate == false && letter[fieldscore] != undefined && <div style={{marginTop: '30%', fontWeight: 500}}>{letter[fieldscore]} / 100</div> }
            {flipstate == true && letter[fieldscore] != undefined && <div style={{marginTop: '30%', fontWeight: 500}}>{letter[fieldtext]}</div> }
        </div>
    }

    // takes in all the company scores for first, second, or third column and shows grids depending
    renderGridItems(firstlevelstandards, A1, B1, C1, D1, A2, B2, C2, D2, A3, B3, C3, D3, A4, B4, C4) {
        const industryfields = ['A', 'B', 'C', 'D'];
        return industryfields.map((field, i) => {
            return (
                <div style={{marginTop: '15%', border: ''}}>
                    <div key={i} className={'square ' + this.compareStandards(this.state.industrystandards[field], firstlevelstandards[field])}>
                        {firstlevelstandards[field] != -1 && <div style={{marginTop: '15%', fontWeight: 500}}>{firstlevelstandards[field]} / 100</div> }
                    </div>
                    {i == 0 && this.state.a_show ?    
                        <div style={{border: '', marginTop: '-35%', marginBottom: '33%'}}>
                            {this.renderNestedGrid(A1, 'A1')}
                            {i == 0 && this.state.a1_show ?    
                                <div style={{marginTop: '', marginBottom: ''}}>
                                    {this.renderNestedTwoGrid(A1, 'A11_score', 'A11_text', this.state.a11_flip, this.A11flip)}
                                    {this.renderNestedTwoGrid(A1, 'A12_score', 'A12_text', this.state.a12_flip, this.A12flip)}
                                </div>
                                : null
                            }
                            {this.renderNestedGrid(A2, 'A2')}
                            {i == 0 && this.state.a2_show ?    
                                <div style={{marginTop: '', marginBottom: ''}}>
                                    {this.renderNestedTwoGrid(A2, 'A21_score', 'A21_text', this.state.a21_flip, this.A21flip)}
                                    {this.renderNestedTwoGrid(A2, 'A22_score', 'A22_text', this.state.a22_flip, this.A22flip)}
                                    {this.renderNestedTwoGrid(A2, 'A23_score', 'A23_text', this.state.a23_flip, this.A23flip)}
                                </div>
                                : null
                            }
                            {this.renderNestedGrid(A3, 'A3')}
                            {i == 0 && this.state.a3_show ?    
                                <div style={{marginTop: '', marginBottom: ''}}>
                                    {this.renderNestedTwoGrid(A3, 'A31_score', 'A31_text', this.state.a31_flip, this.A31flip)}
                                    {this.renderNestedTwoGrid(A3, 'A32_score', 'A32_text', this.state.a32_flip, this.A32flip)}
                                    {this.renderNestedTwoGrid(A3, 'A33_score', 'A33_text', this.state.a33_flip, this.A33flip)}
                                </div>
                                : null
                            }
                            {this.renderNestedGrid(A4, 'A4')}
                            {i == 0 && this.state.a4_show ?    
                                <div style={{marginTop: '', marginBottom: '33%'}}>
                                    {this.renderNestedTwoGrid(A4, 'A41_score', 'A41_text', this.state.a41_flip, this.A41flip)}
                                    {this.renderNestedTwoGrid(A4, 'A42_score', 'A42_text', this.state.a42_flip, this.A42flip)}
                                </div>
                                : null
                            }
                        </div>
                        : null
                    }
                    {i == 1 && this.state.b_show ?    
                        <div style={{border: '', marginTop: '-35%', marginBottom: '33%'}}>
                            {this.renderNestedGrid(B1, 'B1')}
                            {i == 1 && this.state.b1_show ?    
                                <div style={{marginTop: '', marginBottom: ''}}>
                                    {this.renderNestedTwoGrid(B1, 'B11_score', 'B11_text', this.state.b11_flip, this.B11flip)}
                                    {this.renderNestedTwoGrid(B1, 'B12_score', 'B12_text', this.state.b12_flip, this.B12flip)}
                                    {this.renderNestedTwoGrid(B1, 'B13_score', 'B13_text', this.state.b13_flip, this.B13flip)}
                                </div>
                                : null
                            }
                            {this.renderNestedGrid(B2, 'B2')}
                            {i == 1 && this.state.b2_show ?    
                                <div style={{marginTop: '', marginBottom: ''}}>
                                    {this.renderNestedTwoGrid(B2, 'B21_score', 'B21_text', this.state.b21_flip, this.B21flip)}
                                    {this.renderNestedTwoGrid(B2, 'B22_score', 'B22_text', this.state.b22_flip, this.B22flip)}
                                    {this.renderNestedTwoGrid(B2, 'B23_score', 'B23_text', this.state.b23_flip, this.B23flip)}
                                </div>
                                : null
                            }
                            {this.renderNestedGrid(B3, 'B3')}
                            {i == 1 && this.state.b3_show ?    
                                <div style={{marginTop: '', marginBottom: ''}}>
                                    {this.renderNestedTwoGrid(B3, 'B31_score', 'B31_text', this.state.b31_flip, this.B31flip)}
                                    {this.renderNestedTwoGrid(B3, 'B32_score', 'B32_text', this.state.b32_flip, this.B32flip)}
                                    {this.renderNestedTwoGrid(B3, 'B33_score', 'B33_text', this.state.b33_flip, this.B33flip)}
                                    {this.renderNestedTwoGrid(B3, 'B34_score', 'B34_text', this.state.b34_flip, this.B34flip)}
                                    {this.renderNestedTwoGrid(B3, 'B35_score', 'B35_text', this.state.b35_flip, this.B35flip)}
                                </div>
                                : null
                            }
                            {this.renderNestedGrid(B4, 'B4')}
                            {i == 1 && this.state.b4_show ?    
                                <div style={{marginTop: '', marginBottom: ''}}>
                                    {this.renderNestedTwoGrid(B4, 'B41_score', 'B41_text', this.state.b41_flip, this.B41flip)}
                                    {this.renderNestedTwoGrid(B4, 'B42_score', 'B42_text', this.state.b42_flip, this.B42flip)}
                                    {this.renderNestedTwoGrid(B4, 'B43_score', 'B43_text', this.state.b43_flip, this.B43flip)}
                                    {this.renderNestedTwoGrid(B4, 'B44_score', 'B44_text', this.state.b44_flip, this.B44flip)}
                                    {this.renderNestedTwoGrid(B4, 'B45_score', 'B45_text', this.state.b45_flip, this.B45flip)}
                                </div>
                                : null
                            }
                        </div>
                        : null
                    }
                    {i == 2 && this.state.c_show ?    
                        <div style={{border: '', marginTop: '-35%', marginBottom: '33%'}}>
                            {this.renderNestedGrid(C1, 'C1')}
                            {i == 2 && this.state.c1_show ?    
                                <div style={{marginTop: '', marginBottom: ''}}>
                                    {this.renderNestedTwoGrid(C1, 'C11_score', 'C11_text', this.state.c11_flip, this.C11flip)}
                                    {this.renderNestedTwoGrid(C1, 'C12_score', 'C12_text', this.state.c12_flip, this.C12flip)}
                                    {this.renderNestedTwoGrid(C1, 'C13_score', 'C13_text', this.state.c13_flip, this.C13flip)}
                                    {this.renderNestedTwoGrid(C1, 'C14_score', 'C14_text', this.state.c14_flip, this.C14flip)}
                                </div>
                                : null
                            }
                            {this.renderNestedGrid(C2, 'C2')}
                            {i == 2 && this.state.c2_show ?    
                                <div style={{marginTop: '', marginBottom: ''}}>
                                    {this.renderNestedTwoGrid(C2, 'C21_score', 'C21_text', this.state.c21_flip, this.C21flip)}
                                    {this.renderNestedTwoGrid(C2, 'C22_score', 'C22_text', this.state.c22_flip, this.C22flip)}
                                    {this.renderNestedTwoGrid(C2, 'C23_score', 'C23_text', this.state.c23_flip, this.C23flip)}
                                    {this.renderNestedTwoGrid(C2, 'C24_score', 'C24_text', this.state.c24_flip, this.C24flip)}
                                </div>
                                : null
                            }
                            {this.renderNestedGrid(C3, 'C3')}
                            {i == 2 && this.state.c3_show ?    
                                <div style={{marginTop: '', marginBottom: ''}}>
                                    {this.renderNestedTwoGrid(C3, 'C31_score', 'C31_text', this.state.c31_flip, this.C31flip)}
                                    {this.renderNestedTwoGrid(C3, 'C32_score', 'C32_text', this.state.c32_flip, this.C32flip)}
                                    {this.renderNestedTwoGrid(C3, 'C33_score', 'C33_text', this.state.c33_flip, this.C33flip)}
                                    {this.renderNestedTwoGrid(C3, 'C34_score', 'C34_text', this.state.c34_flip, this.C34flip)}
                                </div>
                                : null
                            }
                            {this.renderNestedGrid(C4, 'C4')}
                            {i == 2 && this.state.c4_show ?    
                                <div style={{marginTop: '', marginBottom: ''}}>
                                    {this.renderNestedTwoGrid(C4, 'C41_score', 'C41_text', this.state.c41_flip, this.C41flip)}
                                    {this.renderNestedTwoGrid(C4, 'C42_score', 'C42_text', this.state.c42_flip, this.C42flip)}
                                    {this.renderNestedTwoGrid(C4, 'C43_score', 'C43_text', this.state.c43_flip, this.C43flip)}
                                    {this.renderNestedTwoGrid(C4, 'C44_score', 'C44_text', this.state.c44_flip, this.C44flip)}
                                </div>
                                : null
                            }
                        </div>
                        : null
                    }
                    {i == 3 && this.state.d_show ?    
                        <div style={{border: '', marginTop: '-35%'}}>
                            {this.renderNestedGrid(D1, 'D1')}
                            {this.renderNestedGrid(D2, 'D2')}
                            {this.renderNestedGrid(D3, 'D3')}
                        </div>
                        : null
                    }
                </div>
            )
        })
    }

    render() {

        const renderCompanies1 = () => {
            return this.renderCompanies(this.state.returnedCompanies1, 1);
        }
    
        const renderCompanies2 = () => {
            return this.renderCompanies(this.state.returnedCompanies2, 2);
        }
    
        const renderCompanies3 = () => {
            return this.renderCompanies(this.state.returnedCompanies3, 3);
        }

        // returns first level nesting scores of the first company, including all of its second and third nested scores
        const renderGridItems1 = () => {
            const firstlevel = {};
            
            firstlevel['A'] = this.state.firstA;
            firstlevel['B'] = this.state.firstB;
            firstlevel['C'] = this.state.firstC;
            firstlevel['D'] = this.state.firstD;
            
            return this.renderGridItems(firstlevel, this.state.firstA1, this.state.firstB1, this.state.firstC1, this.state.firstD1, this.state.firstA2, this.state.firstB2, this.state.firstC2, this.state.firstD2, this.state.firstA3, this.state.firstB3, this.state.firstC3, this.state.firstD3, this.state.firstA4, this.state.firstB4, this.state.firstC4);
        }

        // returns first level nesting scores of the second company, including all of its second and third nested scores
        const renderGridItems2 = () => {
            const firstlevel = {};
            firstlevel['A'] = this.state.secondA;
            firstlevel['B'] = this.state.secondB;
            firstlevel['C'] = this.state.secondC;
            firstlevel['D'] = this.state.secondD;

            return this.renderGridItems(firstlevel, this.state.secondA1, this.state.secondB1, this.state.secondC1, this.state.secondD1, this.state.secondA2, this.state.secondB2, this.state.secondC2, this.state.secondD2, this.state.secondA3, this.state.secondB3, this.state.secondC3, this.state.secondD3, this.state.secondA4, this.state.secondB4, this.state.secondC4);
        }

        // returns first level nesting scores of the third company, including all of its second and third nested scores
        const renderGridItems3 = () => {
            const firstlevel = {};
            firstlevel['A'] = this.state.thirdA;
            firstlevel['B'] = this.state.thirdB;
            firstlevel['C'] = this.state.thirdC;
            firstlevel['D'] = this.state.thirdD;
            return this.renderGridItems(firstlevel, this.state.thirdA1, this.state.thirdB1, this.state.thirdC1, this.state.thirdD1, this.state.thirdA2, this.state.thirdB2, this.state.thirdC2, this.state.thirdD2, this.state.thirdA3, this.state.thirdB3, this.state.thirdC3, this.state.thirdD3, this.state.thirdA4, this.state.thirdB4, this.state.thirdC4);
        }

        return(
            <div className="apparelsearch" style={{marginTop: '2.5%'}}>
                <span style={{marginLeft: '19.5%'}}>
                    <input type='text' placeholder="Type the brand" value={this.state.firstcomp} onChange={this.enterFirst} />
                    <input placeholder="Type the brand" value={this.state.secondcomp} onChange={this.enterSecond} />
                    <input placeholder="Type the brand" value={this.state.thirdcomp} onChange={this.enterThird} />
                    {renderCompanies1()}
                    <div style={{marginLeft: "22%"}}>{renderCompanies2()}</div>
                    <div style={{marginLeft: "44%"}}>{renderCompanies3()}</div>
                </span>
                <Grid container style={{border: ''}}>
                <Row container className="fieldnames" style={{width: '21%', border: ''}}>
                    <p className="specificfield" style={{marginTop: '33%'}}>DIVERSITY & INCLUSION</p>
                    <hr className="underline" />
                    {this.state.a_show ? 
                        <div style={{border: ''}}>
                            <p className={"specificfield_a"}>Discrimination</p> 
                            <hr className="underline_nested" />
                            {this.state.a1_show ? 
                            <div>
                                <p className="specificfield_nested field_a1">Prohibits discrimination throughout the organization</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested field_a1">Actively identifies and addresses discrimination</p>
                                <hr className="underline_nested" />
                            </div>
                            : null
                            }
                            <p className={"specificfield_a"}>Gender Equality</p>
                            <hr className="underline_nested" />
                            {this.state.a2_show ? 
                            <div>
                                <p className="specificfield_nested field_a2">Commits to increasing gender diversity throughout the organization</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested field_a2">Maintains strong female representation at all levels of leadership</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested field_a2_1">Ensures equal pay for equal work</p>
                                <hr className="underline_nested" />
                            </div>
                            : null
                            }
                            <p className={"specificfield_a"}>Cultural Diversity</p>
                            <hr className="underline_nested" />
                            {this.state.a3_show ? 
                            <div>
                                <p className="specificfield_nested field_a3">Commits to increasing cultural diversity throughout the organization</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested field_a3">Maintains diverse ethnic representation at all levels of leadership</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested field_a3_1">Actively supports BIPOC and underrepresented communities</p>
                                <hr className="underline_nested" />
                            </div>
                            : null
                            }
                            <p className={"specificfield_a"}>Inclusivity</p>
                            <hr className="underline_nested" />
                            {this.state.a4_show ? 
                            <div>
                                <p className="specificfield_nested field_a4">Fosters an inclusive workplace culture for all types of people</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested field_a4_1">Prioritizes the mental health and wellbeing of employees</p>
                                <hr className="underline_nested" />
                            </div>
                            : null
                            }
                        </div>
                    : null}
                    <p className="specificfield">WORKER EXPLOITATION</p>
                    <hr className="underline" />
                    {this.state.b_show ? 
                        <div>
                            <p className="specificfield_a">Child Labour</p> 
                            <hr className="underline_nested" />
                            {this.state.b1_show ? 
                            <div>
                                <p className="specificfield_nested field_b1">Prohibits the use of child labour throughout the value chain</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested field_b1">Actively works to identify and prevent child labour violations</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested field_b1_1">Enrolls child labour victims in school after discovering violations</p>
                                <hr className="underline_nested" />
                            </div>
                            : null
                            }
                            <p className="specificfield_a">Forced Labour</p>
                            <hr className="underline_nested" />
                            {this.state.b2_show ? 
                            <div>
                                <p className="specificfield_nested field_b2">Prohibits the use of forced labour throughout the value chain</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested field_b2">Actively works to identify and prevent forced labour violations</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested1 field_b2_1">Supports the recovery of forced labour victims after discovering violations</p>
                                <hr className="underline_nested" />
                            </div>
                            : null
                            }
                            <p className="specificfield_a">Living Wage</p>
                            <hr className="underline_nested" />
                            {this.state.b3_show ? 
                            <div>
                                <p className="specificfield_nested field_b3">Ensures all factory workers are paid a living wage</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested field_b3_1">Works to (prioritizes) improve wages throughout the value chain</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested1 field_b3">Ensures wages and benefits are being paid on time and in full</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested1 field_b3_1">Guarantees the right to freedom of association and collective bargaining</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested1 field_b3_1">Advocates for wage progression and fair compensation in the industry</p>
                                <hr className="underline_nested" />
                            </div>
                            : null
                            }
                            <p className="specificfield_a">Working Conditions</p>
                            <hr className="underline_nested" />
                            {this.state.b4_show ? 
                            <div>
                                <p className="specificfield_nested field_b3">Works to (prioritizes) improve factory health and safety conditions</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested field_b3_1">Ensures workers are not forced to work excessive hours</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested1 field_b3">Prohibits all forms of harassment or abuse towards workers</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested1 field_b3_1">Actively works to identify and prevent mistreatment of workers</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested1 field_b3_1">Compensates mistreated workers after discovering violations</p>
                                <hr className="underline_nested" />
                            </div>
                            : null
                            }
                        </div>
                    : null}
                    <p className="specificfield">WASTE & POLLUTION</p>
                    <hr className="underline" />
                    {this.state.c_show ? 
                        <div>
                            <p className="specificfield_a">Air Pollution (GHGs)</p> 
                            <hr className="underline_nested" />
                            {this.state.c1_show ? 
                            <div>
                                <p className="specificfield_nested field_c1">Commits to using less energy throughout the value chain</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested1 field_c1_1">Commits to reducing greenhouse gas emissions throughout the value chain</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested1 field_c1">Works towards reducing the operational carbon footprint</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested1 field_c1">Works with suppliers to reduce manufacturing carbon footprints</p>
                                <hr className="underline_nested" />
                            </div>
                            : null
                            }
                            <p className="specificfield_a">Water Pollution & Wastes</p>
                            <hr className="underline_nested" />
                            {this.state.c2_show ? 
                            <div>
                                <p className="specificfield_nested field_c2">Commits to using less water throughout the value chain</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested1 field_c2">Works with suppliers to recycle water and reduce usage</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested1 field_c2">Eliminates use of toxic chemicals in the production of products</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested1 field_c2">Filters wastewater to avoid contaminating fresh water</p>
                                <hr className="underline_nested" />
                            </div>
                            : null
                            }
                            <p className="specificfield_a">Packaging Waste</p>
                            <hr className="underline_nested" />
                            {this.state.c3_show ? 
                            <div>
                                <p className="specificfield_nested field_c3">Reduces use of plastic packaging and shopping bags</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested1 field_c3_1">Uses recycled plastics and paper packaging materials</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested1 field_c3">Ensures all used packaging can be reused, recycled or composted</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested1 field_c3">Works with suppliers to reduce, reuse and recycle all packaging waste</p>
                                <hr className="underline_nested" />
                            </div>
                            : null
                            }
                            <p className="specificfield_a">Material Waste</p>
                            <hr className="underline_nested" />
                            {this.state.c4_show ? 
                            <div>
                                <p className="specificfield_nested field_c3">Uses recycled materials in the production of products</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested1 field_c3_1">Repurposes or donates damaged and excess products</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested1 field_c3">Offers an effective take-back or repair program for customers</p>
                                <hr className="underline_nested" />
                                <p className="specificfield_nested1 field_c3">Works with suppliers to reduce, reuse and recycle all material waste</p>
                                <hr className="underline_nested" />
                            </div>
                            : null
                            }
                        </div>
                    : null}
                    <p className="specificfield">SUSTAINABLE MATERIALS</p>
                    <hr className="underline" />
                    {this.state.d_show ? 
                        <div>
                            <p className="specificfield_a">Cotton Farming</p> 
                            <hr className="underline_nested" />
                            <p className="specificfield_a">Deforestation</p>
                            <hr className="underline_nested" />
                            <p className="specificfield_a">Animal Welfare</p>
                            <hr className="underline_nested" />
                        </div>
                    : null}
                </Row>
                <Row container className='squarecontainer firstcontainer'>
                    {renderGridItems1()}
                </Row>
                <Row container className='squarecontainer' style={{}}>
                    {renderGridItems2()}
                </Row>
                <Row container className='squarecontainer' style={{}}>
                    {renderGridItems3()}
                </Row>
                <Row container className="dropdownarrows">
                    <div className="circle" style={{marginTop: '65px'}} onClick={this.changeA}>
                        <i className="arrowdown"></i>
                    </div>
                    {this.state.a_show ?
                    <div>
                        <div className={"circle_nested " + (this.state.a1_show ? "extraspace_nested" : null)} onClick={this.changeA1}>
                            <i className="arrowdown"></i>
                        </div>
                        <div className={"circle_nested "  + (this.state.a2_show ? "extraspace_nested1" : null)} onClick={this.changeA2}>
                            <i className="arrowdown"></i>
                        </div>
                        <div className={"circle_nested " + (this.state.a3_show ? "extraspace_nested1" : null)} onClick={this.changeA3}>
                            <i className="arrowdown"></i>
                        </div>
                        <div className={"circle_nested " + (this.state.a4_show ? "extraspace_nested2" : null)} onClick={this.changeA4}>
                            <i className="arrowdown"></i>
                        </div>
                    </div>
                    : null
                    }
                    <div className={"circle"} onClick={this.changeB}>
                        <i className="arrowdown"></i>
                    </div>
                    {this.state.b_show ?
                    <div>
                        <div className={"circle_nested " + (this.state.b1_show ? "extraspace_nested" : null)} onClick={this.changeB1}>
                            <i className="arrowdown"></i>
                        </div>
                        <div className={"circle_nested "  + (this.state.b2_show ? "extraspace_nested1" : null)} onClick={this.changeB2}>
                            <i className="arrowdown"></i>
                        </div>
                        <div className={"circle_nested " + (this.state.b3_show ? "extraspace_nested1" : null)} onClick={this.changeB3}>
                            <i className="arrowdown"></i>
                        </div>
                        <div className={"circle_nested " + (this.state.b4_show ? "extraspace_nested2" : null)} onClick={this.changeB4}>
                            <i className="arrowdown"></i>
                        </div>
                    </div>
                    : null
                    }
                    <div className={"circle"} onClick={this.changeC}>
                        <i className="arrowdown"></i>
                    </div>
                    {this.state.c_show ?
                    <div>
                        <div className={"circle_nested " + (this.state.a1_show ? "extraspace_nested" : null)} onClick={this.changeC1}>
                            <i className="arrowdown"></i>
                        </div>
                        <div className={"circle_nested "  + (this.state.a2_show ? "extraspace_nested" : null)} onClick={this.changeC2}>
                            <i className="arrowdown"></i>
                        </div>
                        <div className={"circle_nested " + (this.state.a3_show ? "extraspace_nested1" : null)} onClick={this.changeC3}>
                            <i className="arrowdown"></i>
                        </div>
                        <div className={"circle_nested " + (this.state.a4_show ? "extraspace_nested2" : null)} onClick={this.changeC4}>
                            <i className="arrowdown"></i>
                        </div>
                    </div>
                    : null
                    }
                    <div className={"circle"} onClick={this.changeD}>
                        <i className="arrowdown"></i>
                    </div>
                    {this.state.d_show ?
                    <div>
                        <div className={"circle_nested " + (this.state.a1_show ? "extraspace_nested" : null)} onClick={this.changeA1}>
                            <i className="arrowdown"></i>
                        </div>
                        <div className={"circle_nested "  + (this.state.a2_show ? "extraspace_nested1" : null)} onClick={this.changeA2}>
                            <i className="arrowdown"></i>
                        </div>
                        <div className={"circle_nested " + (this.state.a3_show ? "extraspace_nested1" : null)} onClick={this.changeA3}>
                            <i className="arrowdown"></i>
                        </div>
                    </div>
                    : null
                    }
                </Row>
                </Grid>
            </div>
        )
}}

export default CompareTool;
