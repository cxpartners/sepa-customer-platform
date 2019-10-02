/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header/component';
import Container from '../components/Container/component';
import PhaseBanner from '../components/PhaseBanner/component';
import Main from '../components/Main/component';
import Row from '../components/Row/component';
import Column from '../components/Column/component';
import Heading from '../components/Heading/component';
import Footer from '../components/Footer/component';
import BackLink from '../components/BackLink/component';
import FieldSet from '../components/FieldSet/component';
import Details from '../components/Details/component';
import TextInput from '../components/TextInput/component';
import Button from '../components/Button/component';
import Paragraph from '../components/Paragraph/component';


const PreAppFormFeedingRate = () => {
  const feedingRateValue = useSelector((state) => state.feedingRateValue);

  return (
    <>
      <Header isNotification userName="Oliver Allen" />
      <Container>
        <PhaseBanner />
        <BackLink href="/pre-app-form-weight" />
        <Main>
          <Row>
            <Column columnWidth="two-thirds">
              <Heading caption="7/10 – Pre-application form" level="h1">Fish details</Heading>
              <FieldSet inPage legend="Maximum feeding rate (kilogrammes per tonnes of fish per day)">
                <Details title="Question guidance" />
                <TextInput inputWidth="one-half" value={feedingRateValue} />
              </FieldSet>
              <Button href="/pre-app-form-bath-medicines">Save and continue</Button>
              <Paragraph>If you cannot finish the form now, all your previously completed answers will be saved.</Paragraph>
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default PreAppFormFeedingRate;
