import React, { Fragment } from 'react';
import { Navbar, Container, Columns, Button } from 'react-bulma-components';
import ImgLogo from '../../../assets/images/logo.png';
import Styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const ColumnsFullWidth = Styled(Columns)`
  width: 100%;
  padding-top: 20px;
  padding-left: 10px;
  padding-bomton: 10px;
`

const Menu = () => {
  let actionBotton;

  if(useLocation().pathname == '/'){
    actionBotton =<a href='/users/sign_in' className="is-pulled-right is-right">
      <Button outlined={true} color="white">ENTER</Button>
    </a>
  } else {

  }

  return (
  <Fragment>
    <Navbar color="dark">
      <Container>
        <ColumnsFullWidth className="is-mobile">
          <Columns.Column desktop={{size: 2}} mobile={{size: 5}}>
            <img src={ImgLogo} className="image"/>
          </Columns.Column>
          <Columns.Column>
            {actionBotton}
          </Columns.Column>
        </ColumnsFullWidth>
      </Container>
    </Navbar>
  </Fragment>
  );
}
export default Menu;