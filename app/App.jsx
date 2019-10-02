import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const ScrollToTop = Loadable({
  loader: () => import('./components/ScrollToTop/component'),
  loading() {
    return <div>Loading...</div>;
  },
});
const Index = Loadable({
  loader: () => import('./pages/Index'),
  loading() {
    return <div>Loading...</div>;
  },
});
const UserTypes = Loadable({
  loader: () => import('./pages/UserTypes'),
  loading() {
    return <div>Loading...</div>;
  },
});
const ArrivesAtStartPage = Loadable({
  loader: () => import('./pages/ArrivesAtStartPage'),
  loading() {
    return <div>Loading...</div>;
  },
});
const StartPage = Loadable({
  loader: () => import('./pages/StartPage'),
  loading() {
    return <div>Loading...</div>;
  },
});
const SepaHomePage = Loadable({
  loader: () => import('./pages/SepaHomePage'),
  loading() {
    return <div>Loading...</div>;
  },
});
const SignUpSwitchContext = Loadable({
  loader: () => import('./pages/SignUpSwitchContext'),
  loading() {
    return <div>Loading...</div>;
  },
});
const AccountPageSwitchContext = Loadable({
  loader: () => import('./pages/AccountPageSwitchContext'),
  loading() {
    return <div>Loading...</div>;
  },
});
const Check = Loadable({
  loader: () => import('./pages/Check'),
  loading() {
    return <div>Loading...</div>;
  },
});
const RadioForm = Loadable({
  loader: () => import('./pages/RadioForm'),
  loading() {
    return <div>Loading...</div>;
  },
});
const SignUp = Loadable({
  loader: () => import('./pages/SignUp'),
  loading() {
    return <div>Loading...</div>;
  },
});
const SignUpConfirmation = Loadable({
  loader: () => import('./pages/SignUpConfirmation'),
  loading() {
    return <div>Loading...</div>;
  },
});
const SignUpTimePasses = Loadable({
  loader: () => import('./pages/SignUpTimePasses'),
  loading() {
    return <div>Loading...</div>;
  },
});
const ReturnsToAddVariation = Loadable({
  loader: () => import('./pages/ReturnsToAddVariation'),
  loading() {
    return <div>Loading...</div>;
  },
});
const SignUpEmailNotification = Loadable({
  loader: () => import('./pages/SignUpEmailNotification'),
  loading() {
    return <div>Loading...</div>;
  },
});
const CreateAccountChoosePassword = Loadable({
  loader: () => import('./pages/CreateAccountChoosePassword'),
  loading() {
    return <div>Loading...</div>;
  },
});
const CreateAccountAddCompanyDetails = Loadable({
  loader: () => import('./pages/CreateAccountAddCompanyDetails'),
  loading() {
    return <div>Loading...</div>;
  },
});
const CreateAccountYourDetails = Loadable({
  loader: () => import('./pages/CreateAccountYourDetails'),
  loading() {
    return <div>Loading...</div>;
  },
});
const CreateAccountConfirmation = Loadable({
  loader: () => import('./pages/CreateAccountConfirmation'),
  loading() {
    return <div>Loading...</div>;
  },
});
const Permits = Loadable({
  loader: () => import('./pages/Permits'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PermitsWithNotifications = Loadable({
  loader: () => import('./pages/PermitsWithNotifications'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PermitPage = Loadable({
  loader: () => import('./pages/PermitPage'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PermitPageClas = Loadable({
  loader: () => import('./pages/PermitPageClas'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PreAppFormEnterCardDetails = Loadable({
  loader: () => import('./pages/PreAppFormEnterCardDetails'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PreAppFormConfirmation = Loadable({
  loader: () => import('./pages/PreAppFormConfirmation'),
  loading() {
    return <div>Loading...</div>;
  },
});
const ReceivesPreAppFormEmail = Loadable({
  loader: () => import('./pages/ReceivesPreAppFormEmail'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PreAppFormStart = Loadable({
  loader: () => import('./pages/PreAppFormStart'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PreAppFormEmailNotification = Loadable({
  loader: () => import('./pages/PreAppFormEmailNotification'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PreAppFormLink = Loadable({
  loader: () => import('./pages/PreAppFormLink'),
  loading() {
    return <div>Loading...</div>;
  },
});
const ReceivesPreAppReviewEmail = Loadable({
  loader: () => import('./pages/ReceivesPreAppReviewEmail'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PreAppReviewEmailNotification = Loadable({
  loader: () => import('./pages/PreAppReviewEmailNotification'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PreAppReviewLink = Loadable({
  loader: () => import('./pages/PreAppReviewLink'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PreAppReview = Loadable({
  loader: () => import('./pages/PreAppReview'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PreAppScreening = Loadable({
  loader: () => import('./pages/PreAppScreening'),
  loading() {
    return <div>Loading...</div>;
  },
});
const ArrivesAtManagementDashboard = Loadable({
  loader: () => import('./pages/ArrivesAtManagementDashboard'),
  loading() {
    return <div>Loading...</div>;
  },
});
const ManagementDashboard = Loadable({
  loader: () => import('./pages/ManagementDashboard'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PermitsTimePasses = Loadable({
  loader: () => import('./pages/PermitsTimePasses'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PreAppFormContactDetails = Loadable({
  loader: () => import('./pages/PreAppFormContactDetails'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PreAppFormSiteName = Loadable({
  loader: () => import('./pages/PreAppFormSiteName'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PreAppFormWaterBodyName = Loadable({
  loader: () => import('./pages/PreAppFormWaterBodyName'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PreAppFormEastingNorthing = Loadable({
  loader: () => import('./pages/PreAppFormEastingsNorthings'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PreAppFormSpecies = Loadable({
  loader: () => import('./pages/PreAppFormSpecies'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PreAppFormWeight = Loadable({
  loader: () => import('./pages/PreAppFormWeight'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PreAppFormFeedingRate = Loadable({
  loader: () => import('./pages/PreAppFormFeedingRate'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PreAppFormFeedMedicines = Loadable({
  loader: () => import('./pages/PreAppFormFeedMedicines'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PreAppFormBathMedicines = Loadable({
  loader: () => import('./pages/PreAppFormBathMedicines'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PreAppFormAdditional = Loadable({
  loader: () => import('./pages/PreAppFormAdditional'),
  loading() {
    return <div>Loading...</div>;
  },
});
const PreAppFormCheck = Loadable({
  loader: () => import('./pages/PreAppFormCheck'),
  loading() {
    return <div>Loading...</div>;
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
