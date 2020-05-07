import React, { Fragment, useState, useEffect } from 'react';
import CategoriesService from '../../../services/categories';
import { Columns, Image, Section } from 'react-bulma-components';
import styled from 'styled-components';

const DivVSpace = styled.div`
  margin-top: 50px;
`

const Categories = (props) => {
  const [categories, setCategories] = useState([]);

  async function fetchCategories() {
    const response = await CategoriesService.index();
    setCategories(response.data['categories'])
  }

  useEffect(() => {
    fetchCategories();
  },[]);

  const categories_list = categories.map((category, key) => 
    <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
      <Image src={category.image_url} onClick={() => props.fetchCategorySearch(category.id)}/>
    </Columns.Column>
  )

  return (
    <Fragment>
      <DivVSpace>
        <Columns className='is-mobile'>
          {categories_list}
        </Columns>
      </DivVSpace>
    </Fragment>
  );
}
export default Categories;