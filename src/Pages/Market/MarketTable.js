import './MarketTable.css'
import CoinItem from './CoinItem'
import { useState, useEffect } from 'react'
import axios from 'axios'


const MarketTable = () => {

  const [marketCoins, setMarketCoins] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en'

  useEffect(() => {
    axios.get(url).then((res) => {
      setMarketCoins(res.data)
    }).catch ((err) => {
      console.error(err)
    })
  }, [])

  return (
  <div className='market-table'>
    <table className='container text-center mt-5 mx-auto'>
      <tr className='heading'>
        <th>#</th>
        <th className='coin-name'>Coin</th>
        <th>Price</th>
        <th>24h</th>
        <th className='hide-mobile'>Volume</th>
        <th className='hide-mobile'>Mkt Cap</th>
      </tr>

      {marketCoins.map(marketCoins => {
          return (
            <tbody>
              <CoinItem marketCoins={marketCoins} key={marketCoins.id}/>
            </tbody>
          )
        })}
      </table>
  </div>
  )
}

export default MarketTable