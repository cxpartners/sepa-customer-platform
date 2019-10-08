import React from 'react';
import Header from '../components/Header/component';
import Container from '../components/Container/component';
import PhaseBanner from '../components/PhaseBanner/component';
import Main from '../components/Main/component';
import Row from '../components/Row/component';
import Column from '../components/Column/component';
import Heading from '../components/Heading/component';
import Footer from '../components/Footer/component';
import List from '../components/List/component';
import IndexListItem from '../components/IndexList/component';

class Index extends React.PureComponent {
  render() {
    return (
      <>
        <Header isNotification={false} userName="" />
        <Container>
          <PhaseBanner />
          <Main>
            <Row>
              <Heading level="h1" caption="Navigation for prototype">Index page</Heading>
              <Column columnWidth="one-half">
                <Heading level="h2">Slice one</Heading>
                <List>
                  <IndexListItem image done href="/user-types">User types</IndexListItem>
                </List>
                <Heading level="h3">Create account</Heading>
                <List>
                  <IndexListItem image done href="/arrives-at-start-page">Arrives at start page</IndexListItem>
                  <IndexListItem image done href="/sepa-home-page">Sepa home page</IndexListItem>
                  <IndexListItem image done href="/start-page">Start page</IndexListItem>
                  <IndexListItem done href="/sign-up">Sign up</IndexListItem>
                  <IndexListItem done href="/sign-up-confirmation">Sign up confirmation</IndexListItem>
                  <IndexListItem image done href="/sign-up-switch-context">Switch to email</IndexListItem>
                  <IndexListItem image done href="/sign-up-email-notification">Sign up email notification</IndexListItem>
                  <IndexListItem image done href="/account-page-switch-context">Switch from email</IndexListItem>
                  <IndexListItem done href="/create-account-choose-password">Create account: choose password</IndexListItem>
                  <IndexListItem done href="/create-account-add-company-details">Create account: add company details</IndexListItem>
                  <IndexListItem done href="/create-account-your-details">Create account: your details</IndexListItem>
                  <IndexListItem done href="/create-account-confirmation">Create account: confirmation</IndexListItem>
                  <IndexListItem tech done href="/permits">Permits</IndexListItem>
                  <IndexListItem tech done href="/permit/CAR%2FL%2F4315058">Permit page (with CLAS data)</IndexListItem>
                </List>
                <Heading level="h3">Add variation</Heading>
                <List>
                  <IndexListItem image done href="/permits-time-passes">Time passes</IndexListItem>
                  <IndexListItem image done href="/returns-to-add-variation">Returns to add variation</IndexListItem>
                  <IndexListItem done href="/permits-with-notifications">Permits (with Notifications)</IndexListItem>
                  <IndexListItem done href="/permit-page">Permit page</IndexListItem>
                  <IndexListItem image done href="/pre-app-form-start">Pre-application form start</IndexListItem>
                  <Heading level="h3">Pre-application form:</Heading>
                  <List>
                    <IndexListItem done href="/pre-app-form-contact-details">Contact details</IndexListItem>
                    <IndexListItem done href="/pre-app-form-site-name">Site name</IndexListItem>
                    <IndexListItem done href="/pre-app-form-water-body-name">Water body name</IndexListItem>
                    <IndexListItem done href="/pre-app-form-eastings-northings">Eastings; Northings</IndexListItem>
                    <IndexListItem done href="/pre-app-form-species">Species</IndexListItem>
                    <IndexListItem done href="/pre-app-form-weight">Weight</IndexListItem>
                    <IndexListItem done href="/pre-app-form-feeding-rate">Feeding rate</IndexListItem>
                    <IndexListItem done href="/pre-app-form-bath-medicines">Bath medicines</IndexListItem>
                    <IndexListItem done href="/pre-app-form-feed-medicines">Feed medicines</IndexListItem>
                    <IndexListItem done href="/pre-app-form-additional">Additional</IndexListItem>
                  </List>
                  <IndexListItem done href="/pre-app-form-check">Check your answers</IndexListItem>
                  <IndexListItem done href="/pre-app-form-enter-card-details">Enter card details</IndexListItem>
                  <IndexListItem done href="/pre-app-form-confirmation">Pre-application form confirmation</IndexListItem>
                </List>
                <Heading level="h3">Complete review</Heading>
                <List>
                  <IndexListItem image done href="/receives-pre-app-form-email">Receives pre-application form notification</IndexListItem>
                  <IndexListItem image done href="/pre-app-form-email-notification">Pre-application form notification</IndexListItem>
                  <IndexListItem image done href="/pre-app-form-link">Switch from email</IndexListItem>
                  <IndexListItem done href="/pre-app-review">Pre-application review</IndexListItem>
                </List>
                <Heading level="h3">Complete screening</Heading>
                <List>
                  <IndexListItem image done href="/receives-pre-app-review-email">Receives pre-application review notification</IndexListItem>
                  <IndexListItem image done href="/pre-app-review-email-notification">Pre-application review notification</IndexListItem>
                  <IndexListItem image done href="/pre-app-review-link">Switch from email</IndexListItem>
                  <IndexListItem done href="/pre-app-screening">Pre-application screening</IndexListItem>
                </List>
                <Heading level="h3">Workload management</Heading>
                <List>
                  <IndexListItem image done href="/arrives-at-management-dashboard">Arrives at Management Dashboard</IndexListItem>
                  <IndexListItem image done href="/management-dashboard">Management Dashboard</IndexListItem>
                </List>
              </Column>
              <Column columnWidth="one-half">
                <Heading level="h2">Slice two</Heading>
                <List>
                  <IndexListItem done image href="/user-types-slice-two">User types</IndexListItem>
                </List>
                <Heading level="h3">Request for current data</Heading>
                <List>
                  <IndexListItem done image href="/request-for-data-receives-email">Receives request for data email notification</IndexListItem>
                  <IndexListItem done image href="/request-for-data-email-notification">Receives request for data email notification</IndexListItem>
                  <IndexListItem done image href="/request-for-data-switch-context">Switch from email</IndexListItem>
                  <IndexListItem done image href="/request-for-data-start-page">Start page</IndexListItem>
                  <IndexListItem tech href="/request-for-data-add-files">Add files</IndexListItem>
                  <IndexListItem href="/request-for-data-confirmation-page">Confirmation page</IndexListItem>
                </List>
                <Heading level="h3">Receive current data upload notification</Heading>
                <List>
                  <IndexListItem image href="/receives-data-upload-notification">Receives notification of data upload</IndexListItem>
                  <IndexListItem image href="/receives-data-upload-notification-email">Email notification</IndexListItem>
                </List>
                <Heading level="h3">Review current data</Heading>
                <List>
                  <IndexListItem image href="/data-review-receive-request">Receives current data request for review</IndexListItem>
                  <IndexListItem image href="/data-review-email-notification">Email notification</IndexListItem>
                  <IndexListItem image href="/data-review-context-switch">Follows link to Case file</IndexListItem>
                  <IndexListItem href="/data-review-permit-page">Data review on permit page</IndexListItem>
                </List>
                <Heading level="h3">Applicant receives notification of data review</Heading>
                <List>
                  <IndexListItem image href="/applicant-reviewed-data-notification">Receives notification in dashboard</IndexListItem>
                  <IndexListItem href="/applicant-reviewed-data-permits">Permits status</IndexListItem>
                  <IndexListItem href="/applicant-reviewed-data-permit-page">Permit with review record</IndexListItem>
                </List>
                <Heading level="h3">Permit officer receives notification of data review</Heading>
                <List>
                  <IndexListItem image href="/permit-officer-reviewed-data-notification">Receives notification in dashboard</IndexListItem>
                  <IndexListItem href="/permit-officer-reviewed-data-permits">Permits status</IndexListItem>
                  <IndexListItem href="/permit-officer-reviewed-data-permit-page">Permit with review record</IndexListItem>
                </List>
              </Column>
            </Row>
          </Main>
        </Container>
        <Footer />
      </>
    );
  }
}

export default Index;
