import React from 'react'

import { SearchOutlined } from '@mui/icons-material'
import './search.scss'
const SearchDash = () => {
  return (
    <div className='search'>
      <input type="text" className="search__inp" id='search__inp'  placeholder='Procurar eventos e rolês'/>
      <label htmlFor="search__inp"><SearchOutlined/></label>
    </div>
  )
}

export default SearchDash