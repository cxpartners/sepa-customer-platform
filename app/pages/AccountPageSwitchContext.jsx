import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/account-page-switch-context.png';

class AccountPageSwitchContext extends React.PureComponent {
  render() {
    return (
      <RouterLink to="/create-account-choose-password">
        <FakePage src={Image} />
      </RouterLink>
    );
  }
}

export default AccountPageSwitchContext;
