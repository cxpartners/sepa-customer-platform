import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/time-passes.png';

const PermitsTimePasses = () => (
  <>
    <RouterLink to="/returns-to-add-variation">
      <FakePage src={Image} />
    </RouterLink>
  </>
);

export default PermitsTimePasses;
