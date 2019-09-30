import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/sign-up-switch-context.png';

class SignUpSwitchContext extends React.PureComponent {
  render() {
    return (
      <RouterLink to="/sign-up-email-notification">
        <FakePage src={Image} />
      </RouterLink>
    );
  }
}

export default SignUpSwitchContext;
