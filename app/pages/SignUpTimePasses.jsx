import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import TimePasses from '../components/TimePasses/component';

class SignUpTimePasses extends React.PureComponent {
  render() {
    return (
      <>
        <RouterLink to="/sign-up-email-notification">
          <TimePasses />
        </RouterLink>
      </>
    );
  }
}

export default SignUpTimePasses;
