import "./about.css";
import busines from "../i-v/img/businesman.avif";
import busines1 from "../i-v/img/business1.jpg";
import busines2 from "../i-v/img/business2.jpg";
import busines3 from "../i-v/img/business3.jpg";
import Footer from "../footer/footer";
   
function About() {   
    return (     
        <>
            <h1 className="del">ABOUT_US</h1>

        <div>
            <div className="kf1">
                <div>
                    <img src={busines} alt="" className="id6"></img>
                </div>

                <div className="kf2">
                    <h2>
                        Android & ios Apps <br></br>Development
                    </h2>
                    <br></br>

                    <p>
                        We develop both Android and iOS friendly applications
                        custom designed assuring the most enhanced experience to
                        the users ...
                    </p>
                    <br></br>
                    <h3>Learn more</h3>
                </div>
            </div>

            <div className="kj1">
                <div className="kj2">
                    <h2>
                        CRM & ERP Software <br></br>Development
                    </h2>
                    <br></br>

                    <p>
                        Comprehensive ERP software that can easily help a
                        business analyse the scope, time and cost of an
                        engagement ...
                    </p>
                    <br></br>

                    <h3>Learn More </h3>
                </div>

                <div>
                    <img src={busines1} alt="" className="ij6"></img>
                </div>
            </div>

            <div className="kf1">
                <div>
                    <img src={busines2} alt="" className="iu6"></img>
                </div>

                <div className="kf2">
                    <h2>Search Enging Optimisation (SEO)</h2>
                    <br></br>

                    <p>
                        When you look for something on the internet and type
                        related keywords on Google, what are the links you
                        generally tend to open? ...
                    </p>
                    <br></br>

                    <h3>Learn More </h3>
                </div>
            </div>

            <div className="kj1">
                <div className="kj2">
                    <h2>
                        Google AdWords / PPC<br></br>Development
                    </h2>
                    <br></br>

                    <p>
                        Investing in Google Ads solely will never help if you
                        fail to perform keyword research for SEO needs of the
                        website ...
                    </p>
                    <br></br>

                    <h3>Learn More </h3>
                </div>
                <div className="ij8">
                    <img src={busines3} alt="" className="ij9"></img>
                </div>
            </div>
            <Footer/>
            </div>
        </>
    );
}

export default About;
