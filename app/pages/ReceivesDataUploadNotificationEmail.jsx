import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/slice-2-email-notification-7.png';

class ReceivesDataUploadNotificationEmail extends React.PureComponent {
  render() {
    return (
      <RouterLink to="/request-for-data-start-page">
        <FakePage src={Image} />
      </RouterLink>
    );
  }
}

export default ReceivesDataUploadNotificationEmail;
