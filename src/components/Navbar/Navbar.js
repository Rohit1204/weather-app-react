import React from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import {NavbarWrapper} from "./Navbar.style";


export const Navbar= () => {
  return (
  <NavbarWrapper>
<a href='https://github.com/rohit1204' target='__blank' className='github'><Icon.GitHub color={"#000000"}/> </a>
      </NavbarWrapper>
  );
};

export default Navbar;