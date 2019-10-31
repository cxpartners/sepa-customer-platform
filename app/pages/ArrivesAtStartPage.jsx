import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/arrives-at-start-page.png';

class UserTypes extends React.PureComponent {
  render() {
    return (
      <RouterLink to="/sepa-home-page">
        <FakePage src={Image} />
      </RouterLink>
    );
  }
}

export default UserTypes;
