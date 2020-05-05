import React, { Fragment } from 'react';
import { Image, Heading } from 'react-bulma-components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DivVSpace = styled.div`
  margin-top: 10;
`

const Album = (props) => {
  return(
    <Link to={`/album/${props.id}`}>
      <Image src={props.cover_url}/>
      <DivVSpace>
        <Heading className='has-text-white' size={6}>{props.title}</Heading>
        <Heading className='has-text-white' size={6} subtitle>{props.artist_name}</Heading>
      </DivVSpace>
    </Link>
  )
}

export default Album;