import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/pre-app-form-enter-card-details.png';

const PreAppFormEnterCardDetails = () => (
  <>
    <RouterLink to="/pre-app-form-confirmation">
      <FakePage src={Image} />
    </RouterLink>
  </>
);

export default PreAppFormEnterCardDetails;
