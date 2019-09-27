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
                <Heading level="h2">Create account</Heading>
                <List>
                  <IndexListItem href="/start-page">Start page</IndexListItem>
                  <IndexListItem done href="/sign-up">Sign up</IndexListItem>
                  <IndexListItem done href="/sign-up-confirmation">Sign up confirmation</IndexListItem>
                  <IndexListItem done href="/sign-up-time-passes">Sign up time passes</IndexListItem>
                  <IndexListItem done href="/sign-up-email-notification">Sign up email notification</IndexListItem>
                  <IndexListItem done href="/create-account-choose-password">Create account: choose password</IndexListItem>
                  <IndexListItem done href="/create-account-add-company-details">Create account: add company details</IndexListItem>
                  <IndexListItem done href="/create-account-your-details">Create account: your details</IndexListItem>
                  <IndexListItem done href="/create-account-confirmation">Create account: confirmation</IndexListItem>
                  <IndexListItem href="/clas-licences">CLAS license list</IndexListItem>
                  <IndexListItem href="/permits">Permits</IndexListItem>
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
