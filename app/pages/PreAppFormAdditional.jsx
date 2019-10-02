/* eslint-disable max-len */
import React from 'react';
import Header from '../components/Header/component';
import Container from '../components/Container/component';
import PhaseBanner from '../components/PhaseBanner/component';
import Main from '../components/Main/component';
import Row from '../components/Row/component';
import Column from '../components/Column/component';
import Heading from '../components/Heading/component';
import Footer from '../components/Footer/component';
import BackLink from '../components/BackLink/component';
import Textarea from '../components/Textarea/component';
import Paragraph from '../components/Paragraph/component';
import Button from '../components/Button/component';
import FieldSet from '../components/FieldSet/component';
import Details from '../components/Details/component';


const PreAppFormAdditional = () => (
  <>
    <Header isNotification userName="Oliver Allen" />
    <Container>
      <PhaseBanner />
      <BackLink href="/pre-app-form-feed-medicines" />
      <Main>
        <Row>
          <Column columnWidth="two-thirds">
            <Heading caption="10/10 – Pre-application form" level="h1">Contact details</Heading>
            <FieldSet inPage legend="Please provide SEPA with further information to support your pre-application">
              <Details title="Question guidance" />
              <Textarea rows="8" inputWidth="two-thirds" />
            </FieldSet>
            <Paragraph>You have now completed the pre-application form. Next you will be asked to check your answers.</Paragraph>
            <Button href="/pre-app-form-check">Save and continue</Button>
            <Paragraph>If you cannot finish the form now, all your previously completed answers will be saved.</Paragraph>
          </Column>
        </Row>
      </Main>
    </Container>
    <Footer />
  </>
);

export default PreAppFormAdditional;
