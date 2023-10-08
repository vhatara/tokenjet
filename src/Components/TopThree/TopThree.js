import { useState, useEffect } from 'react'
import axios from 'axios'
import './TopThree.css'

const TopThree = () => {

  const [topThreeCoins, setTopThreeCoins] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false&locale=en'

  useEffect(() => {
    axios.get(url).then((res) => {
      setTopThreeCoins(res.data)
    }).catch ((err) => {
      console.error(err)
    })
  }, [])

  
  return (
    <div className='d-flex'>
      {topThreeCoins.map((topThree) => (
        <div key={topThree.id} className='topCoin-container d-flex p-4 mx-4 mt-3'>
          <img src={topThree.image} alt={topThree.id} className='img-symbol'/>
          <div className='topCoin-desc d-flex flex-column ms-3'>
            <p className='topCoin-price'>{topThree.current_price.toLocaleString()}</p>
            <p className='topCoin-name'>{topThree.name.toUpperCase()}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TopThree