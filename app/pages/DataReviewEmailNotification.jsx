import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/slice-2-email-notification-10.png';

class DataReviewEmailNotification extends React.PureComponent {
  render() {
    return (
      <RouterLink to="/data-review-permit-page">
        <FakePage src={Image} />
      </RouterLink>
    );
  }
}

export default DataReviewEmailNotification;
