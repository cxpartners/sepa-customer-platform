import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/returns-to-add-variation.png';

const ReturnsToAddVariation = () => (
  <>
    <RouterLink to="/permits-with-notifications">
      <FakePage src={Image} />
    </RouterLink>
  </>
);

export default ReturnsToAddVariation;
