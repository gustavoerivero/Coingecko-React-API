import React from 'react'
import CoinRow from './CoinRow'

export default function TableCoins({ coins, search }) {

  const filteredCoins = coins.filter(
    (coin) => coin.name.toLowerCase().includes(search.toLowerCase()) | coin.symbol.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <table className='table table-dark mt-4 table-hover'>
      <thead>
        <tr>
          <td style={{textAlign: 'center'}}>#</td>
          <td style={{textAlign: 'left'}}>Coin</td>
          <td style={{textAlign: 'right'}}>Price</td>
          <td style={{textAlign: 'center'}}>Price Change</td>
          <td style={{textAlign: 'center'}}>24h Volume</td>
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, i) => (
          <CoinRow coin={coin} index={i + 1} key={i} />
        ))}
      </tbody>
    </table>
  )
}
