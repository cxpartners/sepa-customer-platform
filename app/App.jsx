import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import UserTypes from './pages/UserTypes';
import ArrivesAtStartPage from './pages/ArrivesAtStartPage';
import StartPage from './pages/StartPage';
import SepaHomePage from './pages/SepaHomePage';
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
import Permits from './pages/Permits';
import PermitsWithNotifications from './pages/PermitsWithNotifications';
import PermitPage from './pages/PermitPage';
import PermitPageClas from './pages/PermitPageClas';
import PreAppFormEnterCardDetails from './pages/PreAppFormEnterCardDetails';
import PreAppFormConfirmation from './pages/PreAppFormConfirmation';
import ReceivesPreAppFormEmail from './pages/ReceivesPreAppFormEmail';
import PreAppFormStart from './pages/PreAppFormStart';
import PreAppFormEmailNotification from './pages/PreAppFormEmailNotification';
import PreAppFormLink from './pages/PreAppFormLink';
import ReceivesPreAppReviewEmail from './pages/ReceivesPreAppReviewEmail';
import PreAppReviewEmailNotification from './pages/PreAppReviewEmailNotification';
import PreAppReviewLink from './pages/PreAppReviewLink';
import PreAppReview from './pages/PreAppReview';
import ArrivesAtManagementDashboard from './pages/ArrivesAtManagementDashboard';
import ManagementDashboard from './pages/ManagementDashboard';
import PermitsTimePasses from './pages/PermitsTimePasses';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/user-types" component={UserTypes} />
      <Route exact path="/arrives-at-start-page" component={ArrivesAtStartPage} />
      <Route exact path="/start-page" component={StartPage} />
      <Route exact path="/sepa-home-page" component={SepaHomePage} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/sign-up-confirmation" component={SignUpConfirmation} />
      <Route exact path="/sign-up-switch-context" component={SignUpSwitchContext} />
      <Route exact path="/sign-up-time-passes" component={SignUpTimePasses} />
      <Route exact path="/sign-up-email-notification" component={SignUpEmailNotification} />
      <Route exact path="/account-page-switch-context" component={AccountPageSwitchContext} />
      <Route exact path="/create-account-choose-password" component={CreateAccountChoosePassword} />
      <Route exact path="/create-account-add-company-details" component={CreateAccountAddCompanyDetails} />
      <Route exact path="/create-account-your-details" component={CreateAccountYourDetails} />
      <Route exact path="/create-account-confirmation" component={CreateAccountConfirmation} />
      <Route exact path="/permits" component={Permits} />
      <Route exact path="/permit/:licenceId" component={PermitPageClas} />
      <Route exact path="/permit-page-clas" component={PermitPageClas} />
      <Route exact path="/permits-time-passes" component={PermitsTimePasses} />
      <Route exact path="/returns-to-add-variation" component={ReturnsToAddVariation} />
      <Route exact path="/permits-with-notifications" component={PermitsWithNotifications} />
      <Route exact path="/pre-app-form-start" component={PreAppFormStart} />
      <Route exact path="/permit-page" component={PermitPage} />
      <Route exact path="/pre-app-form-enter-card-details" component={PreAppFormEnterCardDetails} />
      <Route exact path="/pre-app-form-confirmation" component={PreAppFormConfirmation} />
      <Route exact path="/receives-pre-app-form-email" component={ReceivesPreAppFormEmail} />
      <Route exact path="/pre-app-form-email-notification" component={PreAppFormEmailNotification} />
      <Route exact path="/pre-app-form-link" component={PreAppFormLink} />
      <Route exact path="/pre-app-review" component={PreAppReview} />
      <Route exact path="/receives-pre-app-review-email" component={ReceivesPreAppReviewEmail} />
      <Route exact path="/pre-app-review-email-notification" component={PreAppReviewEmailNotification} />
      <Route exact path="/pre-app-review-link" component={PreAppReviewLink} />
      <Route exact path="/arrives-at-management-dashboard" component={ArrivesAtManagementDashboard} />
      <Route exact path="/management-dashboard" component={ManagementDashboard} />
      <Route exact path="/radioform" component={RadioForm} />
      <Route exact path="/check" component={Check} />
    </Switch>
  </Router>
);

export default hot(App);
