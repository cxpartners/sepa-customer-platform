import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/receives-pre-app-form-email.png';

const ReceivesPreAppFormEmail = () => (
  <>
    <RouterLink to="/pre-app-form-email-notification">
      <FakePage src={Image} />
    </RouterLink>
  </>
);

export default ReceivesPreAppFormEmail;
