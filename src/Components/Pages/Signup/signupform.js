import React from 'react'
//import { Link } from 'react-router-dom'

const SignUpForm = () => {
    const [username, UserName] = React.useState('')
    const [firstname, FirstName] = React.useState('')
    const [lastname, LastName] = React.useState('')
    const [email, Email] = React.useState('')
    const [password, Password] = React.useState('')
    const [confirmpass, ConfirmPassword] = React.useState('')
    const [batchno, BatchNo] = React.useState('')
    const [terms, Terms] = React.useState(false)
    function handleTerms() {
        Terms(!terms)
    }
    function handleUsername(e) {
        UserName(e.target.value)
    }
    function handleFirstName(e) {
        FirstName(e.target.value)
    }
    function handleLastName(e) {
        LastName(e.target.value)
    }
    function handleEmail(e) {
        Email(e.target.value)
    }
    function handlePassword(e) {
        Password(e.target.value)
    }
    function handleBatchNo(e) {
        BatchNo(e.target.value)
        console.log(e.target.value)
    }
    function handleConfirmPassword(e){
        ConfirmPassword(e.target.value)
    }
    
    return <div>
            <h1 className="LoginFormText">Registeration</h1>
            <hr style={{paddingBottom:"2rem"}}/>
            <form className="needs-validation">
            <div className="form-group d-grid">
                <div className="row g-1 ">
                    <div className="col-lg-6">
                        <div className="form-floating text-start mb-1">
                            <input id="UserName" type="text" className="form-control htmlForm-control-lg" maxLength="30" value={username} onChange={handleUsername} placeholder="Enter your user name" required />
                            <label htmlFor="UserName">Username</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating text-start mb-1">
                            <select className="form-select" id="BatchNo" aria-label="Floating label select example" onChange={handleBatchNo} value={batchno}>
                                <option value="key1">Sept Cohort 2022</option>
                                <option value="key2">Jan Cohort 2023</option>
                                <option value="key3">Apr Cohort 2023</option>
                            </select>
                            <label htmlFor="BatchNo">Select your Batch number</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-group d-flex">
                <div className="form-floating text-start mb-1">
                    <input id="FirstName" type="text" className="form-control htmlForm-control-lg" maxLength="30" value={firstname} onChange={handleFirstName} placeholder="Enter your first name" required />
                    <label htmlFor="FirstName">Firstname</label>
                </div>
                <div className="form-floating text-start mb-1">
                    <input id="LastName" type="text" className="form-control htmlForm-control-lg" maxLength="30" value={lastname} onChange={handleLastName} placeholder="Enter your last name" required />
                    <label htmlFor="LastName">Lastname</label>
                </div>
            </div>
            <div className="form-floating text-start mb-1">
                <input id="Email" type="email" className="form-control htmlForm-control-lg" maxLength="30" value={email} onChange={handleEmail} placeholder="Enter your email address" required />
                <label htmlFor="Email">Email Address</label>
            </div>
            <div className="form-group">
                <div className="form-floating  text-start  mb-1">
                        <input id="Password" className="form-control htmlForm-control-lg" maxLength="30" value={password} onChange={handlePassword} type="password" placeholder="Enter your Password" required />
                        <label htmlFor="Password">Password</label>
                </div>
                <div className="form-floating  text-start  mb-1">
                        <input id="confirmation" className="form-control htmlForm-control-lg" maxLength="30" value={confirmpass} onChange={handleConfirmPassword} type="password" placeholder="Enter your Password again" required />
                        <label htmlFor="confirmation">Confirm Password</label>
                </div>
            </div>
            <div className="mb-1 text-start row g-0">
                    <div className="form-check htmlForm-switch col-sm-8">
                        <input className="form-check-input" type="checkbox" role="switch" onChange={handleTerms} id="Terms" value={terms}/>
                        <label className="form-check-label" htmlFor="Terms">I agree to the <a href="#termsURL">terms and conditions</a>.</label>
                    </div>
                    <div className="col-sm-4 text-center"><button className="btn btn-sm btn-primary w-100" type="submit">Register</button></div>
            </div>
        </form>
    </div>
}

export default SignUpForm;