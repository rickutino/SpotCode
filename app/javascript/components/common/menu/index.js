import React, { Fragment } from 'react';
import { Navbar, Container, Columns } from 'react-bulma-components';
import ImgLogo from '../../../assets/images/logo.png';

const Menu = () => {
  return (
  <Fragment>
    <Navbar color="dark">
      <Container>
        <Columns className="is-mobile">
          <Columns.Column desktop={{size: 2}} mobile={{size: 5}}>
            <img src={ImgLogo}/>
          </Columns.Column>
          <Columns.Column>

          </Columns.Column>
        </Columns>
      </Container>
    </Navbar>
  </Fragment>
  );
}
export default Menu;