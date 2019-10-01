import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/pre-app-form-page.png';

class PreAppFormPage extends React.PureComponent {
  render() {
    return (
      <RouterLink to="/pre-app-form-contact-details">
        <FakePage src={Image} />
      </RouterLink>
    );
  }
}

export default PreAppFormPage;
