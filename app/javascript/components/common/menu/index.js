import React, { Fragment } from 'react';
import { Navbar, Container, Columns, Button, Dropdown } from 'react-bulma-components';
import ImgLogo from '../../../assets/images/logo.png';
import Styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const ColumnsFullWidth = Styled(Columns)`
  width: 100%;
  padding-top: 20px;
  padding-left: 10px;
  padding-bomton: 10px;
`

const Menu = () => {
  let actionBotton;

  if(useLocation().pathname == '/'){
    actionBotton =<a href="/users/sign_in" className="is-pulled-right is-right">
      <Button outlined={true} color="white">ENTER</Button>
    </a>
  } else {
    actionBotton = <Dropdown className="is-pulled-right is-right" color="dark"
                    label={ <FaUserCircle size="2em"/>}>
                      <Dropdown.Item value="other">
                        <a href='/users/edit'>
                          Edit User
                        </a>
                      </Dropdown.Item>
                      <Dropdown.Item value="other">
                        <a href='/users/sign_out'>
                          LogOut
                        </a>
                      </Dropdown.Item>
                    </Dropdown>
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