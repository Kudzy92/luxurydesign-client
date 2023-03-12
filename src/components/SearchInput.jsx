import { Search } from '@mui/icons-material'
import React from 'react'

const SearchInput = (item) => {
  return (
    <>
    <div className='title'><h3>Search</h3></div>
    <div className='content'>
    <div className='search-input'>
        <div className='form-control'>
            <input type='text' placeholder={item[0].text} />
            <Search/>
        </div>
    </div>
    </div>
    </>
   
  )
}

export default SearchInput