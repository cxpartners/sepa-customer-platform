import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/pre-app-form-email-notification.png';

const PreAppFormEmailNotification = () => (
  <>
    <RouterLink to="/pre-app-form-link">
      <FakePage src={Image} />
    </RouterLink>
  </>
);

export default PreAppFormEmailNotification;
