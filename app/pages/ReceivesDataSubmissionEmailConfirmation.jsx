import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/slice-2-guide-card-7.png';

class ReceivesDataSubmissionEmailConfirmation extends React.PureComponent {
  render() {
    return (
      <RouterLink to="/receives-data-upload-notification-email">
        <FakePage src={Image} />
      </RouterLink>
    );
  }
}

export default ReceivesDataSubmissionEmailConfirmation;
