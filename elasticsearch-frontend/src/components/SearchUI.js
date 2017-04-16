import React, { Component } from 'react'

import SearchBox from './SearchBox'
import SearchResult from './SearchResult'

import 'semantic-ui/dist/semantic.css'


const SearchUI = () => (
        <SearchBox resultRenderer={SearchResult} fluid size={'large'} />
)

export default SearchUI