import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FakePage from '../components/FakePage/component';
import Image from '../assets/images/pages/management-dashboard.png';

const ManagementDashboard = () => (
  <>
    <RouterLink to="/">
      <FakePage src={Image} />
    </RouterLink>
  </>
);

export default ManagementDashboard;
