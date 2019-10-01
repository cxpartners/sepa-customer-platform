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
              <Column columnWidth="full">
                <Heading level="h1" caption="Navigation for prototype">Index page</Heading>
                <Heading level="h2">Set the scene</Heading>
                <List>
                  <IndexListItem done href="/user-types">User types</IndexListItem>
                </List>
                <Heading level="h2">Create account</Heading>
                <List>
                  <IndexListItem done href="/arrives-at-start-page">Arrives at start page</IndexListItem>
                  <IndexListItem done href="/start-page">Start page</IndexListItem>
                  <IndexListItem done href="/sign-up">Sign up</IndexListItem>
                  <IndexListItem done href="/sign-up-confirmation">Sign up confirmation</IndexListItem>
                  <IndexListItem done href="/sign-up-switch-context">Switch to email</IndexListItem>
                  <IndexListItem done href="/sign-up-email-notification">Sign up email notification</IndexListItem>
                  <IndexListItem done href="/account-page-switch-context">Switch from email</IndexListItem>
                  <IndexListItem done href="/create-account-choose-password">Create account: choose password</IndexListItem>
                  <IndexListItem done href="/create-account-add-company-details">Create account: add company details</IndexListItem>
                  <IndexListItem done href="/create-account-your-details">Create account: your details</IndexListItem>
                  <IndexListItem done href="/create-account-confirmation">Create account: confirmation</IndexListItem>
                  <IndexListItem href="/permits">Permits</IndexListItem>
                </List>
                <Heading level="h2">Add variation</Heading>
                <List>
                  <IndexListItem done href="/permits-time-passes">Time passes</IndexListItem>
                  <IndexListItem done href="/returns-to-add-variation">Returns to add variation</IndexListItem>
                  <IndexListItem href="/permits-with-notifications">Permits (with Notifications)</IndexListItem>
                  <IndexListItem href="/permit-page">Permit page</IndexListItem>
                  <IndexListItem href="/pre-app-form-start">Pre-application form start</IndexListItem>
                  <Heading level="h3">Pre-application form:</Heading>
                  <List>
                    <IndexListItem href="/pre-app-form-contact-details">Contact details</IndexListItem>
                    <IndexListItem href="/pre-app-form-site-name">Site name</IndexListItem>
                    <IndexListItem href="/pre-app-form-water-body-name">Water body name</IndexListItem>
                    <IndexListItem href="/pre-app-form-eastings-northings">Eastings; Northings</IndexListItem>
                    <IndexListItem href="/pre-app-form-species">Species</IndexListItem>
                    <IndexListItem href="/pre-app-form-weight">Weight</IndexListItem>
                    <IndexListItem href="/pre-app-form-feeding-rate">Feeding rate</IndexListItem>
                    <IndexListItem href="/pre-app-form-bath-medicines">Bath medicines</IndexListItem>
                    <IndexListItem href="/pre-app-form-feed-medicines">Feed medicines</IndexListItem>
                    <IndexListItem href="/pre-app-form-additional">Additional</IndexListItem>
                  </List>
                  <IndexListItem href="/pre-app-form-check">Check your answers</IndexListItem>
                  <IndexListItem done href="/pre-app-form-enter-card-details">Enter card details</IndexListItem>
                  <IndexListItem done href="/pre-app-form-confirmation">Pre-application form confirmation</IndexListItem>
                </List>
                <Heading level="h2">Complete review</Heading>
                <List>
                  <IndexListItem done href="/receives-pre-app-form-email">Receives pre-application form notification</IndexListItem>
                  <IndexListItem done href="/pre-app-form-email-notification">Pre-application form notification</IndexListItem>
                  <IndexListItem done href="/pre-app-form-link">Switch from email</IndexListItem>
                  <IndexListItem href="/pre-app-review">Pre-application review</IndexListItem>
                </List>
                <Heading level="h2">Complete screening</Heading>
                <List>
                  <IndexListItem done href="/receives-pre-app-review-email">Receives pre-application review notification</IndexListItem>
                  <IndexListItem done href="/pre-app-review-email-notification">Pre-application review notification</IndexListItem>
                  <IndexListItem done href="/pre-app-review-link">Switch from email</IndexListItem>
                  <IndexListItem href="/pre-app-screening">Pre-application screening</IndexListItem>
                </List>
                <Heading level="h2">Workload management</Heading>
                <List>
                  <IndexListItem done href="/arrives-at-management-dashboard">Arrives at Management Dashboard</IndexListItem>
                  <IndexListItem done href="/management-dashboard">Management Dashboard</IndexListItem>
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
