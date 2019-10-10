import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/slice-2-email-notification-13.png';

class PermitOfficerReviewedDataNotification extends React.PureComponent {
  render() {
    return (
      <RouterLink to="/permit-officer-reviewed-data-permits">
        <FakePage src={Image} />
      </RouterLink>
    );
  }
}

export default PermitOfficerReviewedDataNotification;
