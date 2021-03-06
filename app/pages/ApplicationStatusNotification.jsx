import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/slice-2-guide-card-12.png';

class ApplicationStatusNotification extends React.PureComponent {
  render() {
    return (
      <RouterLink to="/applicant-reviewed-data-permits">
        <FakePage src={Image} />
      </RouterLink>
    );
  }
}

export default ApplicationStatusNotification;
