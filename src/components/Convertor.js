import React, { useState } from 'react'

export default function Convertor({ coins }) {

  const [amount, setAmount] = useState(0)
  const [dividend, setDividend] = useState('')
  const [divisor, setDivisor] = useState('')

  const convert = () => {
    const e1 = filteredCoins(dividend)[0] ? filteredCoins(dividend)[0] : ''
    const e2 = filteredCoins(divisor)[0] ? filteredCoins(divisor)[0] : ''

    if(amount <= 0 || dividend === '' || divisor === '')
      return ''

    if(e1 === '' && e2 === '') {
      return ''
    } else {
      return amount * e1.current_price / e2.current_price
    }
    
  }   

  const filteredCoins = (search) => coins.filter(
    (coin) => coin.name.toLowerCase().includes(search.toLowerCase()) | coin.symbol.toLowerCase().includes(search.toLowerCase())
  )

  function flip() {
    let temp = dividend
    setDividend(divisor)
    setDivisor(temp)
  }
  
  return (
    <div className='row g-3 mt-1 mx-auto justify-content-center' >

      <div className='col-2'>
        <input
          type='number'
          placeholder='Enter amount'
          className='form-control bg-dark text-light border-0 margin-top mt-2 text-center'
          onChange={e => setAmount(e.target.value)}
        />
      </div>

      <div className='col-2'>
        <input
          type='text'
          placeholder='Type a coin'
          className='form-control bg-dark text-light border-0 margin-top mt-2 text-center'
          onChange={e => setDividend(e.target.value)}
          value={dividend}
        />
      </div>

      <div className='col-auto'>
        <button 
          className='btn btn-primary mb-3 text-light border-0 margin-top mt-2'
          onClick={flip}
        >
          Flip
        </button>
      </div>

      <div className='col-2'>
        <input
          type='text'
          placeholder='Type a coin'
          className='form-control bg-dark text-light border-0 margin-top mt-2 text-center'
          onChange={e => setDivisor(e.target.value)}
          value={divisor}
        />
      </div>

      <div className='col-4'>
        <input
          type='text'          
          className='form-control bg-dark text-light border-0 margin-top mt-2 text-center'
          value={            
            convert() + ' ' + 
            (divisor === '' ? '' : (filteredCoins(divisor)[0] ? filteredCoins(divisor)[0].symbol.toUpperCase() : ''))
          }
          disabled readonly
        />          
      </div>

    </div>
  )
}
