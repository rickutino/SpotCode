import React, { Fragment, useState, useEffect } from 'react';
import { Form } from 'react-bulma-components';

const SearchBar = (props) => {
  const [query, setQuery] = useState("");

  const Search = (e) => {
    if (e.key === 'Enter') {
      props.fetchSearch(query);
      setQuery("")
    }
  }
  return ( 
    <Fragment>
      <Form.Field onKeyDown={Search}>
        <Form.Control iconRight>
          <Form.Input
            placeholder='Text input'
            placeholder='Albums, artistas ou musicas'
            value={query}
            onChange={e => setQuery(e.target.value)}
/>
        </Form.Control>
      </Form.Field>
    </Fragment>
  )
}
export default SearchBar;