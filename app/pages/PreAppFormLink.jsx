import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/pre-app-form-link.png';

const PreAppFormLink = () => (
  <>
    <RouterLink to="/pre-app-review">
      <FakePage src={Image} />
    </RouterLink>
  </>
);

export default PreAppFormLink;
