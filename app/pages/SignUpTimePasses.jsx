import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import TimePasses from '../components/TimePasses/component';

const SignUpTimePasses = () => (
  <>
    <RouterLink to="/sign-up-email-notification">
      <TimePasses />
    </RouterLink>
  </>
);

export default SignUpTimePasses;
