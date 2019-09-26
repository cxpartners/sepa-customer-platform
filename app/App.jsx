import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import StartPage from './pages/StartPage';
import Check from './pages/Check';
import RadioForm from './pages/RadioForm';
import TextForm from './pages/TextForm';
import SignUp from './pages/SignUp';
import SignUpConfirmation from './pages/SignUpConfirmation';
import SignUpTimePasses from './pages/SignUpTimePasses';
import SignUpEmailNotification from './pages/SignUpEmailNotification';
import CreateAccountChoosePassword from './pages/CreateAccountChoosePassword';
import CreateAccountAddCompanyDetails from './pages/CreateAccountAddCompanyDetails';
import CreateAccountYourDetails from './pages/CreateAccountYourDetails';
import CreateAccountConfirmation from './pages/CreateAccountConfirmation';
import LicencesListPage from './pages/LicencesListPage';
import LicencesItemPage from './pages/LicencesItemPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/start-page" component={StartPage} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-up-confirmation" component={SignUpConfirmation} />
      <Route path="/sign-up-time-passes" component={SignUpTimePasses} />
      <Route path="/sign-up-email-notification" component={SignUpEmailNotification} />
      <Route path="/create-account-choose-password" component={CreateAccountChoosePassword} />
      <Route path="/create-account-add-company-details" component={CreateAccountAddCompanyDetails} />
      <Route path="/create-account-your-details" component={CreateAccountYourDetails} />
      <Route path="/create-account-confirmation" component={CreateAccountConfirmation} />
      <Route path="/clas-licences" exact component={LicencesListPage} />
      <Route path="/clas-licences/:licenceId" exact component={LicencesItemPage} />
      <Route path="/radioform" component={RadioForm} />
      <Route path="/textform" component={TextForm} />
      <Route path="/check" component={Check} />
    </Switch>
  </Router>
);

export default hot(App);
