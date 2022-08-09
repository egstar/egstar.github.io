import SignUpForm from './SignForm.js'
function Signup() {
    return (
      <div className="main">
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{
        width:"100%",
        height:"100vh",
    }}>
        <div className="SignupForm justify-content-center align-items-center">
            <div className="LoginFormHead row g-0">
            </div>
            <div className="LoginFormContent row g-0">
                <div className="LoginFormLeft col-sm-1"></div>
                <div className="SignupFormCenter col-sm-10 mx-auto"><SignUpForm /></div>
                <div className="LoginFormRight col-sm-1"></div>
            </div>
            <div className="LoginFormTail row g-0">
            </div>
        </div>
    </div>
      </div>
    );
  }
  
  export default Signup;