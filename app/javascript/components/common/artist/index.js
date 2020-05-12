import React,{ Fragment } from 'react';
import { Heading, Image } from 'react-bulma-components';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const DivVSpace = styled.div`
margin-top: 10px;
`

const Artist = (props) => {
  return (
    <Fragment>
      <Link to={`/artist/${props.id}`}>
        <Image src={props.photo_url} size={10} className='is-rounded is-1by1'/>
        <DivVSpace>
          <Heading className='has-text-white has-text-centered' size={5}>{props.name}</Heading>
        </DivVSpace>
      </Link>
    </Fragment>
  );
}
export default Artist;