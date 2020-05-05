import React, { Fragment, useState } from 'react';
import SectionWrapper from '../../components/common/section_wrapper';
import NavbarFooter from '../../components/common/navbar_footer';
import Dicovery from '../../components/dicovery';

    const DiscoveryScreen = () => {
      return(
        <Fragment>
          <div>Discovery Screen</div>
          <SectionWrapper>
            <Dicovery/>
          </SectionWrapper>
          <NavbarFooter/>
        </Fragment>
      )
    }
    export default DiscoveryScreen;