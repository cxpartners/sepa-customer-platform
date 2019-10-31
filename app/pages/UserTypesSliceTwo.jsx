import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/slice-2-user-types.png';

class UserTypes extends React.PureComponent {
  render() {
    return (
      <RouterLink to="/request-for-data-receives-email">
        <FakePage src={Image} />
      </RouterLink>
    );
  }
}

export default UserTypes;
