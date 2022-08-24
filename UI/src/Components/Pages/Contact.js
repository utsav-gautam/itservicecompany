import React, { Component } from 'react'
import './Contact.css'
import CrudServices from '../../Services/CrudServices';
const service = new CrudServices();

class Contact extends Component {

    constructor(){
        super();
        this.state={
            customername:"",
            customermobile:"",
            customeremail:"",
            customercompany:"",
            customerrequirement:""
        }
    }
    onNameChange = (event) => {
        this.setState({  customername: event.target.value })
        console.log(this.state)
    }

    onMobileChange=(event)=>{
        this.setState({ customermobile:event.target.value})
    }
    onEmailChange=(event)=>{
        this.setState({ customeremail:event.target.value})
    }
    onCompanyChange=(event)=>{
        this.setState({ customercompany:event.target.value})
    }
    onRequirementChange=(event)=>{
        this.setState({ customerrequirement:event.target.value})
    }

    handleClick = () => {
        console.log("entered")
        let data = {
            customername:this.state. customername,
            customermobile:this.state. customermobile,
            customeremail:this.state. customeremail,
            customercompany:this.state. customercompany,
            customerrequirement:this.state. customerrequirement
        }
        service.CreateRecord(data).then((data) => {
            console.log(data)
            if (data.request.status === 200) {
                console.log("successfull")
                window.location="http://localhost:3000/contact/success"
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        const state=this.state;
        return (
            <div className='form-body'>
                <div class="form-container">
                    <h1>Contact Us</h1>
                    <form>
                        <div class="element-box">
                            <label className='lbl-name'>Full Name</label>
                            <input onChange={this.onNameChange} value={state.customername} className='lbl-input' placeholder="Full Name" type="text" required />
                        </div>
                        <div class="element-box">
                            <label className='lbl-name'>Mobile Number</label><br></br>
                            <input onChange={this.onMobileChange} value={state. customermobile}className='lbl-input' placeholder="Mobile Number" type="text" required />
                        </div>
                        <div class="element-box">
                            <label className='lbl-name'>Email Id</label>
                            <input onChange={this.onEmailChange} value={state. customeremail}className='lbl-input' placeholder="Email Id" type="email" required />
                        </div>
                        <div class="element-box">
                            <label className='lbl-name'>Company Name</label>
                            <input onChange={this.onCompanyChange} value={state. customercompany}className='lbl-input' placeholder="Company Name" type="text" required />
                        </div>
                        <div class="element-box">
                            <label className='lbl-name'>Describe Your Requirement</label>
                            <textarea onChange={this.onRequirementChange} value={state. customerrequirement} className='lbl-input' placeholder="Describe Your Requirement" required />
                        </div>
                    </form>
                    <input onClick={this.handleClick} type="submit" value="Submit" />
                </div>
            </div>

        );
    }
}

export default Contact