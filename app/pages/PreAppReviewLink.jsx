import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/pre-app-review-link.png';

const PreAppReviewLink = () => (
  <>
    <RouterLink to="/pre-app-screening">
      <FakePage src={Image} />
    </RouterLink>
  </>
);

export default PreAppReviewLink;
