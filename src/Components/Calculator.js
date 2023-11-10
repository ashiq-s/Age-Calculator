import {Component} from "react";

export class Calculator extends Component{
    constructor(){
        super();
        this.state = {year: 0, month: 0, day: 0};
    }

    handleChange = (event) => {
        let dob = document.getElementById("dob").value;
        if(dob === ""){
            alert("Please enter your date of birth");
            return;
        }
        let dobDate = new Date(dob);
        let todayDate = new Date();
        let y1 = todayDate.getFullYear();
        let y2 = dobDate.getFullYear();
        let m1 = todayDate.getMonth();
        let m2 = dobDate.getMonth();
        let d1 = todayDate.getDate();
        let d2 = dobDate.getDate();
        if (y1 < y2 || (y1 == y2 &&  m1 < m2) || (y1 == y2 && m1 == m2 && d1 < d2)) {
            alert("Please enter valid date of birth");
            this.setState({year: 0, month: 0, day: 0});
            return;
        }

        let years = y1 - y2;
        let months = m1 - m2;
        let dates = d1 - d2;
        if (months < 0) {
            months += 12;
            years -= 1;
        }
        if (dates < 0) {
            dates += 31;
            months -= 1;
            if (months < 0) {
                months += 12;
                years -= 1;
            }
        }
        if (dates == 0) dates = 1;
        this.setState({year: years, month: months, day: dates});
    }

    render(){
        return(
            <center>
                <div>
                    <h1>Age Calculator</h1>
                    <p><strong>Enter your date of birth</strong></p>
                    <input type="date" id="dob" style={{width:"250px", marginBottom:"10px", padding:"5px"}}></input>
                    <div><button style={{backgroundColor:"#007bff", color:"white", border:"0px", padding:"10px 20px", borderRadius:"5px"}} onClick={this.handleChange}>Calculate Age</button></div>
                    <h2>Your are {this.state.year} years old, {this.state.month} months old, {this.state.day} days old.</h2>
                </div>
            </center>
        );
    }
}