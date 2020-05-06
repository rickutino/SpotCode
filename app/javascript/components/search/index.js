import React,{ Fragment, useState, useEffect } from 'react';
import SearchBar from './search_bar';
import Categories from  '../common/categories';
import { Columns } from 'react-bulma-components';

const Search = () => {
  return (
    <Fragment>
      <Colmuns>
        <Columns.Column desktop={{ size: 6, offset: 3 }} mobile={{ size: 12 }}>
          <SearchBar/>
        </Columns.Column>
      </Colmuns>

      <Categories/>
      
    </Fragment>
  )
}
export default Search;