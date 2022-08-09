import { LoginFormFunction} from './LoginForm'


function Login() {
  return (
    <div className="main container-fluid d-flex justify-content-center align-items-center" style={{
        width:"100%",
        height:"100vh",
    }}>
      <div className="LoginForm justify-content-center align-items-center">
        <div className="LoginFormHead row g-0">
        </div>
        <div className="LoginFormContent row g-0">
            <div className="LoginFormLeft col-sm-1"></div>
            <div className="LoginFormCenter col-sm-10 mx-auto"><LoginFormFunction /></div>
            <div className="LoginFormRight col-sm-1"></div>
        </div>
        <div className="LoginFormTail row g-0"></div>
      </div>
    </div>
  );
}

export default Login;