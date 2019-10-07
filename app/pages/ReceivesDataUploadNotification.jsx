import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/slice-2-confirmation-6.png';

class ReceivesDataUploadNotification extends React.PureComponent {
  render() {
    return (
      <RouterLink to="/receives-data-submission-email-confirmation">
        <FakePage src={Image} />
      </RouterLink>
    );
  }
}

export default ReceivesDataUploadNotification;
