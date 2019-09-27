/* eslint-disable max-len */
import React from 'react';
import Header from '../components/Header/component';
import Container from '../components/Container/component';
import PhaseBanner from '../components/PhaseBanner/component';
import Main from '../components/Main/component';
import Row from '../components/Row/component';
import Column from '../components/Column/component';
import Footer from '../components/Footer/component';
import Panel from '../components/Panel/component';
import Paragraph from '../components/Paragraph/component';
import Button from '../components/Button/component';

const CreateAccountConfirmation = () => (
  <>
    <Header />
    <Container>
      <PhaseBanner />
      <Main>
        <Row>
          <Column columnWidth="full">
            <Panel title="Account created">
              Account reference number:
              <br />
              <strong>860120</strong>
            </Panel>
            <Paragraph>We have sent you an email confirming the creation of your account.</Paragraph>
            <Button href="/permits">Go to account dashboard</Button>
          </Column>
        </Row>
      </Main>
    </Container>
    <Footer />
  </>
);

export default CreateAccountConfirmation;
