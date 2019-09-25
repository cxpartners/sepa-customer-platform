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
import Paragraph from '../components/Paragraph/component';
import FieldSet from '../components/FieldSet/component';
import TextInput from '../components/TextInput/component';
import { UPDATE_CREATE_ACCOUNT_YOUR_DETAILS_NAME, UPDATE_CREATE_ACCOUNT_YOUR_DETAILS_NUMBER } from '../reducers';
import Button from '../components/Button/component';


const CreateAccountYourDetails = () => {
  const createAccountYourDetailsNameValue = useSelector((state) => state.createAccountYourDetailsNameValue);
  const createAccountYourDetailsNumberValue = useSelector((state) => state.createAccountYourDetailsNumberValue);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Container>
        <PhaseBanner />
        <BackLink href="/create-account-add-company-details" />
        <Main>
          <Row>
            <Column columnWidth="two-thirds">
              <Heading caption="Step 3/3 - Create account" level="h1">Your details</Heading>
              <Paragraph>Please provide us with your details so we can contact you.</Paragraph>
              <FieldSet>
                <TextInput inputWidth="two-thirds" type="text" label="Full name" onChange={(e) => dispatch({ type: UPDATE_CREATE_ACCOUNT_YOUR_DETAILS_NAME, payload: e.target.value })} value={createAccountYourDetailsNameValue} />
                <TextInput inputWidth="two-thirds" type="number" label="Phone number (preferred)" onChange={(e) => dispatch({ type: UPDATE_CREATE_ACCOUNT_YOUR_DETAILS_NUMBER, payload: e.target.value })} value={createAccountYourDetailsNumberValue} />
                <Button href="/create-account-confirmation">Create account</Button>
              </FieldSet>
            </Column>
          </Row>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default CreateAccountYourDetails;
