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


const PreAppFormWaterBodyName = () => {
  const waterBobyNameValue = useSelector((state) => state.waterBobyNameValue);

  return (
    <>
      <Header isNotification userName="Oliver Allen" />
      <Container>
        <PhaseBanner />
        <BackLink href="/pre-app-form-site-name" />
        <Main>
          <Row>
            <Column columnWidth="two-thirds">
              <Heading caption="3/10 – Pre-application form" level="h1">Marine pen fish farm details</Heading>
              <FieldSet inPage legend="Water body name">
                <Details title="Question guidance" />
                <TextInput inputWidth="two-thirds" value={waterBobyNameValue} />
              </FieldSet>
              <Button href="/pre-app-form-eastings-northings">Save and continue</Button>
              <Paragraph>If you cannot finish the form now, all your previously completed answers will be saved.</Paragraph>
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default PreAppFormWaterBodyName;
