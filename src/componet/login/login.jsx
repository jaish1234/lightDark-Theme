import Header from "../header1/header1";
import "./login.css"

function Login() {
    return(
      <>
      <div className="a1">
        <div className="box">    
        <span className="line">      
        <span className="line1">          
        <span className="line2">
            <form>
                <h2>login</h2>
                <div className="inputBox">
                    {/* <input type="e-mail id" required="required"></input> */}
                    <input type="email" name="" id="" required="required" />
                    <span>E-mail id</span>
                    <i></i>
                </div>

                <div className="inputBox">
                    <input type="password" required="required"></input>
                    <span>Password</span>
                    <i></i>
                </div>

                <div className="links">
                    {/* <a href="#">Forgot Password</a> */}
                    {/* <a href="#">Signup</a> */}
                </div>
                <br></br>
                <input type="submit" value="Login" className="button"></input>
            </form>
            </span>
            </span>
            </span>
        </div>
        </div>
      </>
    );
}

export default Login;