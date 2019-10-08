import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/user-types.png';

class UserTypes extends React.PureComponent {
  render() {
    return (
      <RouterLink to="/arrives-at-start-page">
        <FakePage src={Image} />
      </RouterLink>
    );
  }
}

export default UserTypes;
