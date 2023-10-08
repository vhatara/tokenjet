import React from 'react'

const CoinItem = (props) => {
  return (
    <tr className='coin-row'>
        <td>{props.marketCoins.market_cap_rank}</td>
        <td className='img-symbol'>
          <p>{props.marketCoins.symbol.toUpperCase()}</p>
          <img src={props.marketCoins.image} alt={props.marketCoins.id} />
        </td>
        <td>${props.marketCoins.current_price.toLocaleString()}</td>
        <td className={ 
                      (props.marketCoins.price_change_percentage_24h >= 0
                          ? "text-success"
                          : "text-danger")
                      }>{props.marketCoins.price_change_percentage_24h}%</td>
        <td className='hide-mobile'>${props.marketCoins.total_volume.toLocaleString()}</td>
        <td className='hide-mobile'>${props.marketCoins.market_cap.toLocaleString()}</td>
    </tr>
  )
}

export default CoinItem