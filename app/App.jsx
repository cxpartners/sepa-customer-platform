import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop/component';

import Index from './pages/Index';
import UserTypes from './pages/UserTypes';
import ArrivesAtStartPage from './pages/ArrivesAtStartPage';
import StartPage from './pages/StartPage';
import SepaHomePage from './pages/SepaHomePage';
import SignUpSwitchContext from './pages/SignUpSwitchContext';
import AccountPageSwitchContext from './pages/AccountPageSwitchContext';
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
import PreAppScreening from './pages/PreAppScreening';
import ArrivesAtManagementDashboard from './pages/ArrivesAtManagementDashboard';
import ManagementDashboard from './pages/ManagementDashboard';
import PermitsTimePasses from './pages/PermitsTimePasses';
import PreAppFormContactDetails from './pages/PreAppFormContactDetails';
import PreAppFormSiteName from './pages/PreAppFormSiteName';
import PreAppFormWaterBodyName from './pages/PreAppFormWaterBodyName';
import PreAppFormEastingNorthing from './pages/PreAppFormEastingsNorthings';
import PreAppFormSpecies from './pages/PreAppFormSpecies';
import PreAppFormWeight from './pages/PreAppFormWeight';
import PreAppFormFeedingRate from './pages/PreAppFormFeedingRate';
import PreAppFormFeedMedicines from './pages/PreAppFormFeedMedicines';
import PreAppFormBathMedicines from './pages/PreAppFormBathMedicines';
import PreAppFormAdditional from './pages/PreAppFormAdditional';
import PreAppFormCheck from './pages/PreAppFormCheck';
import UserTypesSliceTwo from './pages/UserTypesSliceTwo';
import RequestForDataReceivesEmail from './pages/RequestForDataReceivesEmail';
import RequestForDataEmailNotification from './pages/RequestForDataEmailNotification';
import RequestForDataSwitchContext from './pages/RequestForDataSwitchContext';
import RequestForDataStartPage from './pages/RequestForDataStartPage';
import RequestForDataAddFiles from './pages/RequestForDataAddFiles';
import RequestForDataConfirmationPage from './pages/RequestForDataConfirmationPage';
import ReceivesDataUploadNotification from './pages/ReceivesDataUploadNotification';
import ReceivesDataUploadNotificationEmail from './pages/ReceivesDataUploadNotificationEmail';
import DataReviewReceiveRequest from './pages/DataReviewReceiveRequest';
import DataReviewEmailNotification from './pages/DataReviewEmailNotification';
import DataReviewContextSwitch from './pages/DataReviewContextSwitch';
import DataReviewPermitPage from './pages/DataReviewPermitPage';
import ApplicantReviewedDataNotification from './pages/ApplicantReviewedDataNotification';
import ApplicantReviewedDataPermits from './pages/ApplicantReviewedDataPermits';
import ApplicantReviewedDataPermitPage from './pages/ApplicantReviewedDataPermitPage';
import PermitOfficerReviewedDataNotification from './pages/PermitOfficerReviewedDataNotification';
import PermitOfficerReviewedDataPermits from './pages/PermitOfficerReviewedDataPermits';
import PermitOfficerReviewedDataPermitPage from './pages/PermitOfficerReviewedDataPermitPage';

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
      <Route exact path="/user-types-slice-two" component={UserTypesSliceTwo} />
      <Route exact path="/request-for-data-receives-email" component={RequestForDataReceivesEmail} />
      <Route exact path="/request-for-data-email-notification" component={RequestForDataEmailNotification} />
      <Route exact path="/request-for-data-switch-context" component={RequestForDataSwitchContext} />
      <Route exact path="/request-for-data-start-page" component={RequestForDataStartPage} />
      <Route exact path="/request-for-data-add-files" component={RequestForDataAddFiles} />
      <Route exact path="/request-for-data-confirmation-page" component={RequestForDataConfirmationPage} />
      <Route exact path="/receives-data-upload-notification" component={ReceivesDataUploadNotification} />
      <Route exact path="/receives-data-upload-notification-email" component={ReceivesDataUploadNotificationEmail} />
      <Route exact path="/data-review-receive-request" component={DataReviewReceiveRequest} />
      <Route exact path="/data-review-email-notification" component={DataReviewEmailNotification} />
      <Route exact path="/data-review-context-switch" component={DataReviewContextSwitch} />
      <Route exact path="/data-review-permit-page" component={DataReviewPermitPage} />
      <Route exact path="/applicant-reviewed-data-notification" component={ApplicantReviewedDataNotification} />
      <Route exact path="/applicant-reviewed-data-permits" component={ApplicantReviewedDataPermits} />
      <Route exact path="/applicant-reviewed-data-permit-page" component={ApplicantReviewedDataPermitPage} />
      <Route exact path="/permit-officer-reviewed-data-notification" component={PermitOfficerReviewedDataNotification} />
      <Route exact path="/permit-officer-reviewed-data-permits" component={PermitOfficerReviewedDataPermits} />
      <Route exact path="/permit-officer-reviewed-data-permit-page" component={PermitOfficerReviewedDataPermitPage} />
    </Switch>
  </Router>
);

export default hot(App);
