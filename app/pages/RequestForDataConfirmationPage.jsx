import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/slice-2-confirmation-page-5.png';

class RequestForDataConfirmationPage extends React.PureComponent {
  render() {
    return (
      <RouterLink to="/receives-data-upload-notification">
        <FakePage src={Image} />
      </RouterLink>
    );
  }
}

export default RequestForDataConfirmationPage;
