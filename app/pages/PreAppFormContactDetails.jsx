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
import { UPDATE_CONTACT_DETAILS_RADIO } from '../reducers';
import FieldSet from '../components/FieldSet/component';
import RadioGroup from '../components/RadioGroup/component';
import Radio from '../components/Radio/component';
import Details from '../components/Details/component';
import Button from '../components/Button/component';
import Paragraph from '../components/Paragraph/component';


const PreAppFormContactDetails = () => {
  const contactDetailsValue = useSelector((state) => state.contactDetailsValue);
  const dispatch = useDispatch();

  return (
    <>
      <Header isNotification userName="Oliver Allen" />
      <Container>
        <PhaseBanner />
        <BackLink href="/pre-app-form-start" />
        <Main>
          <Row>
            <Column columnWidth="two-thirds">
              <Heading caption="1/10 – Pre-application form" level="h1">Contact details</Heading>
              <FieldSet inPage legend="Pre-application owner" hint="Who will be the main point of contact for this application?">
                <Details title="Question guidance">&nbsp;</Details>
                <RadioGroup>
                  <Radio id="contact1" name="contactDetailsRadio" value="Oliver Allen" checked={contactDetailsValue === 'Oliver Allen'} onChange={(e) => dispatch({ type: UPDATE_CONTACT_DETAILS_RADIO, payload: e.target.value })} />
                  <Radio id="contact2" name="contactDetailsRadio" value="Aileen Gray" checked={contactDetailsValue === 'Aileen Gray'} onChange={(e) => dispatch({ type: UPDATE_CONTACT_DETAILS_RADIO, payload: e.target.value })} />
                  <Radio id="contact3" name="contactDetailsRadio" value="Ewan Gregory" checked={contactDetailsValue === 'Ewan Gregory'} onChange={(e) => dispatch({ type: UPDATE_CONTACT_DETAILS_RADIO, payload: e.target.value })} />
                  <Radio id="contact4" name="contactDetailsRadio" value="Isobel Livingston" checked={contactDetailsValue === 'Isobel Livingston'} onChange={(e) => dispatch({ type: UPDATE_CONTACT_DETAILS_RADIO, payload: e.target.value })} />
                </RadioGroup>
              </FieldSet>
              <Button href="/pre-app-form-site-name">Save and continue</Button>
              <Paragraph>If you cannot finish the form now, all your previously completed answers will be saved.</Paragraph>
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default PreAppFormContactDetails;
