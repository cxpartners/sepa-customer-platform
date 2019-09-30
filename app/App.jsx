import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import UserTypes from './pages/UserTypes';
import ArrivesAtStartPage from './pages/ArrivesAtStartPage';
import StartPage from './pages/StartPage';
import SignUpSwitchContext from './pages/SignUpSwitchContext';
import AccountPageSwitchContext from './pages/AccountPageSwitchContext';
import Check from './pages/Check';
import RadioForm from './pages/RadioForm';
import SignUp from './pages/SignUp';
import SignUpConfirmation from './pages/SignUpConfirmation';
import SignUpTimePasses from './pages/SignUpTimePasses';
import ReturnsToAddVariation from './pages/ReturnsToAddVariation';
import SignUpEmailNotification from './pages/SignUpEmailNotification';
import CreateAccountChoosePassword from './pages/CreateAccountChoosePassword';
import CreateAccountAddCompanyDetails from './pages/CreateAccountAddCompanyDetails';
import CreateAccountYourDetails from './pages/CreateAccountYourDetails';
import CreateAccountConfirmation from './pages/CreateAccountConfirmation';
import LicencesListPage from './pages/LicencesListPage';
import LicencesItemPage from './pages/LicencesItemPage';
import Permits from './pages/Permits';
import PreAppFormEnterCardDetails from './pages/PreAppFormEnterCardDetails';
import PreAppFormConfirmation from './pages/PreAppFormConfirmation';
import ReceivesPreAppFormEmail from './pages/ReceivesPreAppFormEmail';
import PreAppFormEmailNotification from './pages/PreAppFormEmailNotification';
import PreAppFormLink from './pages/PreAppFormLink';
import ReceivesPreAppReviewEmail from './pages/ReceivesPreAppReviewEmail';
import PreAppReviewEmailNotification from './pages/PreAppReviewEmailNotification';
import PreAppReviewLink from './pages/PreAppReviewLink';
import ArrivesAtManagementDashboard from './pages/ArrivesAtManagementDashboard';
import ManagementDashboard from './pages/ManagementDashboard';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/user-types" component={UserTypes} />
      <Route exact path="/arrives-at-start-page" component={ArrivesAtStartPage} />
      <Route path="/start-page" component={StartPage} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-up-confirmation" component={SignUpConfirmation} />
      <Route path="/sign-up-switch-context" component={SignUpSwitchContext} />
      <Route path="/sign-up-time-passes" component={SignUpTimePasses} />
      <Route path="/returns-to-add-variation" component={ReturnsToAddVariation} />
      <Route path="/sign-up-email-notification" component={SignUpEmailNotification} />
      <Route path="/account-page-switch-context" component={AccountPageSwitchContext} />
      <Route path="/create-account-choose-password" component={CreateAccountChoosePassword} />
      <Route path="/create-account-add-company-details" component={CreateAccountAddCompanyDetails} />
      <Route path="/create-account-your-details" component={CreateAccountYourDetails} />
      <Route path="/create-account-confirmation" component={CreateAccountConfirmation} />
      <Route path="/clas-licences" exact component={LicencesListPage} />
      <Route path="/clas-licences/:licenceId" exact component={LicencesItemPage} />
      <Route path="/permits" component={Permits} />
      <Route path="/pre-app-form-enter-card-details" component={PreAppFormEnterCardDetails} />
      <Route path="/pre-app-form-confirmation" component={PreAppFormConfirmation} />
      <Route path="/receives-pre-app-form-email" component={ReceivesPreAppFormEmail} />
      <Route path="/pre-app-form-email-notification" component={PreAppFormEmailNotification} />
      <Route path="/pre-app-form-link" component={PreAppFormLink} />
      <Route path="/receives-pre-app-review-email" component={ReceivesPreAppReviewEmail} />
      <Route path="/pre-app-review-email-notification" component={PreAppReviewEmailNotification} />
      <Route path="/pre-app-review-link" component={PreAppReviewLink} />
      <Route path="/arrives-at-management-dashboard" component={ArrivesAtManagementDashboard} />
      <Route path="/management-dashboard" component={ManagementDashboard} />
      <Route path="/radioform" component={RadioForm} />
      <Route path="/check" component={Check} />
    </Switch>
  </Router>
);

export default hot(App);
