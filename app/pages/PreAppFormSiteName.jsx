/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import Paragraph from '../components/Paragraph/component';
import TextInput from '../components/TextInput/component';
import Button from '../components/Button/component';
import Details from '../components/Details/component';
import { UPDATE_PRE_APP_FORM_SITE_NAME } from '../reducers';

const PreAppFormSiteName = () => {
  const siteNameValue = useSelector((state) => state.siteNameValue);
  const dispatch = useDispatch();

  return (
    <>
      <Header isNotification userName="Oliver Allen" />
      <Container>
        <PhaseBanner />
        <BackLink href="/pre-app-form-contact-details" />
        <Main>
          <Row>
            <Column columnWidth="two-thirds">
              <Heading caption="2/10 – Pre-application form" level="h1">Marine pen fish farm details</Heading>
              <FieldSet inPage legend="Site name">
                <Details title="Question guidance">&nbsp;</Details>
                <TextInput type="text" id="site-name" inputWidth="one-half" value={siteNameValue} onChange={(e) => dispatch({ type: UPDATE_PRE_APP_FORM_SITE_NAME, payload: e.target.value })} />
              </FieldSet>
              <Button href="/pre-app-form-water-body-name">Save and continue</Button>
              <Paragraph>If you cannot finish the form now, all your previously completed answers will be saved.</Paragraph>
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default PreAppFormSiteName;
