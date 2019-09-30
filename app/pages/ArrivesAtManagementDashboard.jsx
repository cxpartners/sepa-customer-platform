import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/arrives-at-management-dashboard.png';

const ArrivesAtManagementDashboard = () => (
  <>
    <RouterLink to="/management-dashboard">
      <FakePage src={Image} />
    </RouterLink>
  </>
);

export default ArrivesAtManagementDashboard;
