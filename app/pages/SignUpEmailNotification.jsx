import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Image from '../assets/images/pages/sign-up-email-notification.png';
import FakePage from '../components/FakePage/component';

class SignUpEmailNotification extends React.PureComponent {
  render() {
    return (
      <>
        <RouterLink to="/create-account-choose-password">
          <FakePage src={Image} />
        </RouterLink>
      </>
    );
  }
}

export default SignUpEmailNotification;
