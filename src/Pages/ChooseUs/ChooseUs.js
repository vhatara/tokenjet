import React from 'react'
import './ChooseUs.css'
import ChooseBox from '../../Components/ChooseBox/ChooseBox'
import hand from '../../Images/bitcoin-in-hand-7108680-5769356.png'

const ChooseUs = () => {
  return (
    <section id='choose-us'>
        <div className='choose-us-container'>
            <h1 className='why-tokenjet text-center'><span>Why</span> Token<span>Jet</span>?</h1>
          <div className='features-container d-flex justify-content-between pt-5'>
            <div>
            <ChooseBox 
              iconName="bi bi-wallet choose-icon"
              chooseTitle="Connect Your Wallet"
              chooseDesc="Use Trust Wallet, Metamask or to connect to the app."
            />

            <ChooseBox 
              iconName="bi bi-pencil-square choose-icon" 
              chooseTitle="Select Your Quantity"
              chooseDesc="Upload your crypto and set a title, description and price."
            />

            <ChooseBox 
              iconName="bi bi-receipt choose-icon"
              chooseTitle="Confirm Transaction"
              chooseDesc="Earn by selling your crypto on our marketplace."
            />
            </div>

            <div className='hand-img-icon'>
              <img src={hand} alt='' className='hand-img'></img>
            </div>

            <div>
            <ChooseBox 
              iconName="bi bi-phone-flip choose-icon"
              chooseTitle="Receive Your Own NFTs"
              chooseDesc="Invest all your crypto at one place on one platform."
            />

            <ChooseBox 
              iconName="bi bi-cart choose-icon"
              chooseTitle="Take a Market to Sell"
              chooseDesc="Discover, collect the right crypto collections to buy or sell."
            />

            <ChooseBox 
              iconName="bi bi-layers choose-icon"
              chooseTitle="Drive Your Collection"
              chooseDesc="We make it easy to Discover, Invest and manage."
            />
            </div>

          </div>
        </div>
    </section>
  )
}

export default ChooseUs