import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/receives-pre-app-review-email.png';

const ReceivesPreAppReviewEmail = () => (
  <>
    <RouterLink to="/pre-app-review-email-notification">
      <FakePage src={Image} />
    </RouterLink>
  </>
);

export default ReceivesPreAppReviewEmail;
