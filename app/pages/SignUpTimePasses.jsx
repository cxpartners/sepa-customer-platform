import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/time-passes.png';

const SignUpTimePasses = () => (
  <>
    <RouterLink to="/sign-up-email-notification">
      <FakePage src={Image} />
    </RouterLink>
  </>
);

export default SignUpTimePasses;
