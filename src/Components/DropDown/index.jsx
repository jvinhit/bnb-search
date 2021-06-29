/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Item } from './style';

// eslint-disable-next-line react/prop-types
const DropDown = ({ data }) => (
  data?.length ? (
    <Container>
      { data.map((item) => (<Item key={item?.id}>{item?.display_name}</Item>))}
    </Container>
  ) : null
);

export default DropDown;
