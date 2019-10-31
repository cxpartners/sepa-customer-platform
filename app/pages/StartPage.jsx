import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/start-page.png';

class StartPage extends React.PureComponent {
  render() {
    return (
      <RouterLink to="/sign-up">
        <FakePage src={Image} />
      </RouterLink>
    );
  }
}

export default StartPage;
