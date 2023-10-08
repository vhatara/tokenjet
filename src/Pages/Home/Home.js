import './Home.css'
import landing_img from "../../Images/image_processing20210528-2866-14n834c.png"
import TopThree from '../../Components/TopThree/TopThree'

const Home = (props) => {



  return (
    <section id="home" className='home-section'>
      <div className='home-div d-flex flex-column justify-content-center'>

        <div className=' landing d-flex justify-content-around'>
          <div className='landing-desc'>
            <h1 className='landing-text'>Buy & <br/> Sell <span>Crypto</span></h1>
            <p className='mt-2 mb-4'>
              Welcome to <span>TokenJet</span>, your gateway to the world of digital currencies. Explore cutting-edge blockchain technology, discover the latest trends, and stay ahead in the ever-evolving crypto market. Get expert insights, reliable news, and user-friendly tools all in one place. Join us in revolutionizing the future of finance. Start your crypto journey <a href="#choose-us" >here</a>!
            </p>
              <div className='call-to-action'>
                <a href="#market" className='explore-more ms-3'>Explore More</a>
                {/* <a href="#join" className='join mx-3'>Join</a> */}
              </div>
          </div>

          <div className='landing-img'>
            <img className='hide-mobile' src={landing_img} alt="landing-img"/>
          </div>
        </div>

        <div className='topThreeCoins ms-auto'>
          <TopThree />
        </div>
      </div>



    </section>
  )
}

export default Home