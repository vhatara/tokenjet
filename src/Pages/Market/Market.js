import './Market.css'
import MarketTable from './MarketTable'

const Market = () => {
  return (
    <section id='market'> 
        <div className='market-container my-5'>
            <h1>Market Update</h1>

            <div>
              <MarketTable />
            </div>
        </div>
    </section>
  )
}

export default Market