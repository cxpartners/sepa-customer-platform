import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import ScrollToTop from './components/ScrollToTop/component';
import Spinner from './components/Spinner/component';

const Index = Loadable({
  loader: () => import('./pages/Index'),
  loading() {
    return <Spinner />;
  },
});
const UserTypes = Loadable({
  loader: () => import('./pages/UserTypes'),
  loading() {
    return <Spinner />;
  },
});
const ArrivesAtStartPage = Loadable({
  loader: () => import('./pages/ArrivesAtStartPage'),
  loading() {
    return <Spinner />;
  },
});
const StartPage = Loadable({
  loader: () => import('./pages/StartPage'),
  loading() {
    return <Spinner />;
  },
});
const SepaHomePage = Loadable({
  loader: () => import('./pages/SepaHomePage'),
  loading() {
    return <Spinner />;
  },
});
const SignUpSwitchContext = Loadable({
  loader: () => import('./pages/SignUpSwitchContext'),
  loading() {
    return <Spinner />;
  },
});
const AccountPageSwitchContext = Loadable({
  loader: () => import('./pages/AccountPageSwitchContext'),
  loading() {
    return <Spinner />;
  },
});
const Check = Loadable({
  loader: () => import('./pages/Check'),
  loading() {
    return <Spinner />;
  },
});
const RadioForm = Loadable({
  loader: () => import('./pages/RadioForm'),
  loading() {
    return <Spinner />;
  },
});
const SignUp = Loadable({
  loader: () => import('./pages/SignUp'),
  loading() {
    return <Spinner />;
  },
});
const SignUpConfirmation = Loadable({
  loader: () => import('./pages/SignUpConfirmation'),
  loading() {
    return <Spinner />;
  },
});
const SignUpTimePasses = Loadable({
  loader: () => import('./pages/SignUpTimePasses'),
  loading() {
    return <Spinner />;
  },
});
const ReturnsToAddVariation = Loadable({
  loader: () => import('./pages/ReturnsToAddVariation'),
  loading() {
    return <Spinner />;
  },
});
const SignUpEmailNotification = Loadable({
  loader: () => import('./pages/SignUpEmailNotification'),
  loading() {
    return <Spinner />;
  },
});
const CreateAccountChoosePassword = Loadable({
  loader: () => import('./pages/CreateAccountChoosePassword'),
  loading() {
    return <Spinner />;
  },
});
const CreateAccountAddCompanyDetails = Loadable({
  loader: () => import('./pages/CreateAccountAddCompanyDetails'),
  loading() {
    return <Spinner />;
  },
});
const CreateAccountYourDetails = Loadable({
  loader: () => import('./pages/CreateAccountYourDetails'),
  loading() {
    return <Spinner />;
  },
});
const CreateAccountConfirmation = Loadable({
  loader: () => import('./pages/CreateAccountConfirmation'),
  loading() {
    return <Spinner />;
  },
});
const Permits = Loadable({
  loader: () => import('./pages/Permits'),
  loading() {
    return <Spinner />;
  },
});
const PermitsWithNotifications = Loadable({
  loader: () => import('./pages/PermitsWithNotifications'),
  loading() {
    return <Spinner />;
  },
});
const PermitPage = Loadable({
  loader: () => import('./pages/PermitPage'),
  loading() {
    return <Spinner />;
  },
});
const PermitPageClas = Loadable({
  loader: () => import('./pages/PermitPageClas'),
  loading() {
    return <Spinner />;
  },
});
const PreAppFormEnterCardDetails = Loadable({
  loader: () => import('./pages/PreAppFormEnterCardDetails'),
  loading() {
    return <Spinner />;
  },
});
const PreAppFormConfirmation = Loadable({
  loader: () => import('./pages/PreAppFormConfirmation'),
  loading() {
    return <Spinner />;
  },
});
const ReceivesPreAppFormEmail = Loadable({
  loader: () => import('./pages/ReceivesPreAppFormEmail'),
  loading() {
    return <Spinner />;
  },
});
const PreAppFormStart = Loadable({
  loader: () => import('./pages/PreAppFormStart'),
  loading() {
    return <Spinner />;
  },
});
const PreAppFormEmailNotification = Loadable({
  loader: () => import('./pages/PreAppFormEmailNotification'),
  loading() {
    return <Spinner />;
  },
});
const PreAppFormLink = Loadable({
  loader: () => import('./pages/PreAppFormLink'),
  loading() {
    return <Spinner />;
  },
});
const ReceivesPreAppReviewEmail = Loadable({
  loader: () => import('./pages/ReceivesPreAppReviewEmail'),
  loading() {
    return <Spinner />;
  },
});
const PreAppReviewEmailNotification = Loadable({
  loader: () => import('./pages/PreAppReviewEmailNotification'),
  loading() {
    return <Spinner />;
  },
});
const PreAppReviewLink = Loadable({
  loader: () => import('./pages/PreAppReviewLink'),
  loading() {
    return <Spinner />;
  },
});
const PreAppReview = Loadable({
  loader: () => import('./pages/PreAppReview'),
  loading() {
    return <Spinner />;
  },
});
const PreAppScreening = Loadable({
  loader: () => import('./pages/PreAppScreening'),
  loading() {
    return <Spinner />;
  },
});
const ArrivesAtManagementDashboard = Loadable({
  loader: () => import('./pages/ArrivesAtManagementDashboard'),
  loading() {
    return <Spinner />;
  },
});
const ManagementDashboard = Loadable({
  loader: () => import('./pages/ManagementDashboard'),
  loading() {
    return <Spinner />;
  },
});
const PermitsTimePasses = Loadable({
  loader: () => import('./pages/PermitsTimePasses'),
  loading() {
    return <Spinner />;
  },
});
const PreAppFormContactDetails = Loadable({
  loader: () => import('./pages/PreAppFormContactDetails'),
  loading() {
    return <Spinner />;
  },
});
const PreAppFormSiteName = Loadable({
  loader: () => import('./pages/PreAppFormSiteName'),
  loading() {
    return <Spinner />;
  },
});
const PreAppFormWaterBodyName = Loadable({
  loader: () => import('./pages/PreAppFormWaterBodyName'),
  loading() {
    return <Spinner />;
  },
});
const PreAppFormEastingNorthing = Loadable({
  loader: () => import('./pages/PreAppFormEastingsNorthings'),
  loading() {
    return <Spinner />;
  },
});
const PreAppFormSpecies = Loadable({
  loader: () => import('./pages/PreAppFormSpecies'),
  loading() {
    return <Spinner />;
  },
});
const PreAppFormWeight = Loadable({
  loader: () => import('./pages/PreAppFormWeight'),
  loading() {
    return <Spinner />;
  },
});
const PreAppFormFeedingRate = Loadable({
  loader: () => import('./pages/PreAppFormFeedingRate'),
  loading() {
    return <Spinner />;
  },
});
const PreAppFormFeedMedicines = Loadable({
  loader: () => import('./pages/PreAppFormFeedMedicines'),
  loading() {
    return <Spinner />;
  },
});
const PreAppFormBathMedicines = Loadable({
  loader: () => import('./pages/PreAppFormBathMedicines'),
  loading() {
    return <Spinner />;
  },
});
const PreAppFormAdditional = Loadable({
  loader: () => import('./pages/PreAppFormAdditional'),
  loading() {
    return <Spinner />;
  },
});
const PreAppFormCheck = Loadable({
  loader: () => import('./pages/PreAppFormCheck'),
  loading() {
    return <Spinner />;
  },
});

const App = () => (
  <Router>
    <ScrollToTop />
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
      <Route exact path="/pre-app-form-contact-details" component={PreAppFormContactDetails} />
      <Route exact path="/pre-app-form-site-name" component={PreAppFormSiteName} />
      <Route exact path="/pre-app-form-water-body-name" component={PreAppFormWaterBodyName} />
      <Route exact path="/pre-app-form-eastings-northings" component={PreAppFormEastingNorthing} />
      <Route exact path="/pre-app-form-species" component={PreAppFormSpecies} />
      <Route exact path="/pre-app-form-weight" component={PreAppFormWeight} />
      <Route exact path="/pre-app-form-feeding-rate" component={PreAppFormFeedingRate} />
      <Route exact path="/pre-app-form-bath-medicines" component={PreAppFormBathMedicines} />
      <Route exact path="/pre-app-form-feed-medicines" component={PreAppFormFeedMedicines} />
      <Route exact path="/pre-app-form-additional" component={PreAppFormAdditional} />
      <Route exact path="/pre-app-form-check" component={PreAppFormCheck} />
      <Route exact path="/pre-app-review" component={PreAppReview} />
      <Route exact path="/receives-pre-app-review-email" component={ReceivesPreAppReviewEmail} />
      <Route exact path="/pre-app-review-email-notification" component={PreAppReviewEmailNotification} />
      <Route exact path="/pre-app-review-link" component={PreAppReviewLink} />
      <Route exact path="/pre-app-screening" component={PreAppScreening} />
      <Route exact path="/arrives-at-management-dashboard" component={ArrivesAtManagementDashboard} />
      <Route exact path="/management-dashboard" component={ManagementDashboard} />
      <Route exact path="/radioform" component={RadioForm} />
      <Route exact path="/check" component={Check} />
    </Switch>
  </Router>
);

export default hot(App);
