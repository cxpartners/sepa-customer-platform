import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/pre-app-review-email-notification.png';

const PreAppReviewEmailNotification = () => (
  <>
    <RouterLink to="/pre-app-review-link">
      <FakePage src={Image} />
    </RouterLink>
  </>
);

export default PreAppReviewEmailNotification;
