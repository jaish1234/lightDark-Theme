import './about.css'
import white from '../i-v/img/black.webp'
import client from '../i-v/img/client.png'
import pro from '../i-v/img/pro.png'
import tro from '../i-v/img/tro.png'
import team from '../i-v/img/team.png'
import busines from '../i-v/img/businesman.avif'
import busines1 from '../i-v/img/business1.jpg'

function About() {
    return ( 
        <>
            <img src={white} alt='' className='id1'></img>

            <h1 className='del'>ABOUT_US</h1>

            <img src={client} alt='' className='id2'></img>

            <img src={pro} alt='' className='id3'></img>

            <img src={tro} alt='' className='id4'></img>

            <img src={team} alt='' className='id5'></img>

        <div className='del1'> 
            <p className='del2'>100+</p>
            <p className='del3'>150+</p>
            <p className='del4'>100%</p>
            <p className='del5'>9+</p>
        </div>
        <div className='de1'>
            <h2 className='mn1'>Clients</h2>
            <h2 className='mn2'>Projects</h2>
            <h2 className='mn3'>Success Rate</h2>
            <h2 className='mn4'>Team Members</h2>
        </div>

    <div className='kf1'>    
        <img src={busines} alt='' className='id6'></img>

        <h2 className='kf2'>Android & ios Apps <br></br>Development</h2>
        <br></br>

        <p className='kf3'>We develop both Android and iOS friendly <br></br>
        applications custom designed assuring the <br></br> 
        most enhanced experience to the users ...</p><br></br>

        <h3 className='kf4'>Learn More --> </h3>
    </div>


    <div className='kj1'>    
        <img src={busines1} alt='' className='id7'></img>

        <h2 className='kj2'>CRM & ERP Software <br></br>Development</h2>
        <br></br>

        <p className='kj3'>Comprehensive ERP software that can easily help <br></br> 
        a business analyse the scope, time and cost of an engagement ...</p><br></br>

        <h3 className='kj4'>Learn More --> </h3>
    </div>
        </>
     );
}

export default About;