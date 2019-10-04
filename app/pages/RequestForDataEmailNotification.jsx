import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/slice-2-email-notification-2.png';

class UserTypes extends React.PureComponent {
  render() {
    return (
      <RouterLink to="/request-for-data-switch-context">
        <FakePage src={Image} />
      </RouterLink>
    );
  }
}

export default UserTypes;
