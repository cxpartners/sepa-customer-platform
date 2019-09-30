/* eslint-disable max-len */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Header from '../components/Header/component';
import Container from '../components/Container/component';
import PhaseBanner from '../components/PhaseBanner/component';
import Main from '../components/Main/component';
import Row from '../components/Row/component';
import Column from '../components/Column/component';
import Heading from '../components/Heading/component';
import Footer from '../components/Footer/component';
import Panel from '../components/Panel/component';
import Paragraph from '../components/Paragraph/component';

const SignUpConfirmation = () => (
  <>
    <Header isNotification={false} userName="" />
    <Container>
      <PhaseBanner />
      <Main>
        <Row>
          <Column columnWidth="two-thirds">
            <RouterLink className="govuk-routerlink" to="/sign-up-switch-context">
              <Panel title="Verify email address" />
            </RouterLink>
            <Heading level="h3">We have sent you an email to the address you provided.</Heading>
            <Paragraph>You will need to open that email and click on the link so you can create an account.</Paragraph>
          </Column>
        </Row>
      </Main>
    </Container>
    <Footer />
  </>
);

export default SignUpConfirmation;
