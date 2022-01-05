import React from 'react'

export default function CoinRow({coin, index}) {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 4
  })

  const roundToTwo = (num) => {
    return +(Math.round(num + "e+3")  + "e-3");
  }
  
  return (
    <tr key={index}>
      <td style={{textAlign: 'center'}}>{index}</td>
      <td>
        <img src={coin.image} alt={coin.name} style={{width: '3%'}} className='img-fluid me-4' />
        <span>
          {coin.name}
        </span>
        <span className='ms-3 text-muted text-uppercase'>
          {coin.symbol}
        </span>
      </td>
      <td style={{textAlign: 'right'}}>
        {formatter.format(coin.current_price)}
      </td>
      <td style={{textAlign: 'center'}} className={(coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger')}>
        {roundToTwo(coin.price_change_percentage_24h)} %
      </td>
      <td style={{textAlign: 'center'}}>
        {formatter.format(coin.total_volume)}
      </td>
    </tr>
  )
}
