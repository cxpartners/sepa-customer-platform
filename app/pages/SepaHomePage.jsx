import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/sepa-home-page.png';

class SepaHomePage extends React.PureComponent {
  render() {
    return (
      <RouterLink to="/start-page">
        <FakePage src={Image} />
      </RouterLink>
    );
  }
}

export default SepaHomePage;
