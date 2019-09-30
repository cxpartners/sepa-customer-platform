import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/pre-app-form-confirmation.png';

const PreAppFormConfirmation = () => (
  <>
    <RouterLink to="/receives-pre-app-form-email">
      <FakePage src={Image} />
    </RouterLink>
  </>
);

export default PreAppFormConfirmation;
