import React,{ Fragment, useState, useEffect } from 'react';
import SearchBar from './search_bar';
import Categories from  '../common/categories';
import { Columns } from 'react-bulma-components';
import SearchService from '../../services/search';
import CategoriesService from '../../services/categories';

const Search = () => {
  const [albums,  setAlbums]  = useState([]);
  const [artists, setArtists] = useState([]);
  const [songs,   setSongs]   = useState([]);

  async function fetchCategorySearch(id) {
    const response = await CategoriesService.show(id);
    setAlbums(response.data['albums']);
    setArtists(response.data['artists']);
    setSongs(response.data['songs']);
  }

  async function fetchSearch(query) {
    const response = await SearchService.index(query);
    setAlbums(response.data['albums']);
    setArtirst(response.data['artists']);
    setSongs(response.data['songs']);
  }
  return (
    <Fragment>
      <Colmuns>
        <Columns.Column desktop={{ size: 6, offset: 3 }} mobile={{ size: 12 }}>
          <SearchBar fetchSearch={fetchSearch}/>
        </Columns.Column>
      </Colmuns>

      <Categories fetchCategorySearch={fetchCategorySearch}/>

    </Fragment>
  )
}
export default Search;