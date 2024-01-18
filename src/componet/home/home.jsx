import About from '../about/about';
import './home.css'
   
function Home() {
    return ( 
        <>
            <div className='coc'>        

                <p className='hel2'><b>Solutions, That Meet Your <br /> Business Needs</b></p>
                <div className='call1'>
                    <p className='moc2'> Hello, Welcome To Best Web Solution In India</p>

                    <p className='moc3'>Helping Your Business Grow <br />------</p>

                    <p className='moc4'>Web Solutions India is one of the fastest growing IT companies in Mumbai,
                    serving clients across <br /> India and aboard. We broadly specialise in Software
                    Development, Website-Designing and Digital <br /> Marketing solutions.</p>
                </div><br />
                <About/>
            </div>
        </>
     );
}

export default Home;