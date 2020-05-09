import React, { Fragment} from 'react';
import NavbarFooter from '../../components/common/navbar_footer';
import SectionWrapper from '../../components/common/section_wrapper';
import { Heading } from 'react-bulma-components';
import Favotites from '../../components/favorites';


const FavoritesScreen = () => {
  return(
    <Fragment>
      <SectionWrapper>
        <Heading className='has-text-centered has-text-white'>Favoritos</Heading> 
        <Favotites/>
      </SectionWrapper>
      <NavbarFooter/>
    </Fragment>
  )
}
export default FavoritesScreen;