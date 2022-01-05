import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TableCoins from './components/TableCoins'
import Convertor from './components/Convertor'

function App() {

  const [coins, setCoins] = useState([])

  const [search, setSearch] = useState('')

  const getData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10000')
    setCoins(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='container'>
      <div className='row g-4 mt-3 mx-auto'>

        <div>
          <h4 className='text-center'>
            Cryptocurrency Converter and Calculator
          </h4>
        </div>

        <Convertor coins={coins} />

        <input
          type='text'
          placeholder='Search a Coin'
          className='form-control bg-dark text-light border-0 margin-top mt-4 text-center'
          onChange={e => setSearch(e.target.value)}
        />

        <TableCoins coins={coins} search={search} />

      </div>
    </div>
  );
}

export default App;
