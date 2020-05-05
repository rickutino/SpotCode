import React, { Fragment, useState, useEffect } from 'react';
import { Heading, Columns, Image } from 'react-bulma-components';
import styled from 'styled-components';

const DivVSpace = styled.div`
  margin-top: 20px;
  margin-botton: 20px;
`

const Albums = () => {
  return (
    <Fragment>
      <Columns className='is-vcentered is-mobile is-centered'>
        <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} className='has-test-centered'>
          <Image src=''/>
          <DivVSpace>
            <Heading size={5} className='has-text-white'>Titulo</Heading>
            <Heading size={6} subtitle className='has-text-white'>SubTitulo</Heading>
          </DivVSpace>
        </Columns.Column>
      </Columns>
    </Fragment>
  )
}
export default Albums;